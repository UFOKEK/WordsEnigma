
import { useLazyQuery } from "@apollo/client";
import { useState, useEffect, useRef } from "react";

import eventBus from "../EventBus/EventBus";
import GameBoard from '../GameBoard/GameBoard';
import EmojiGrid from "../EmojiGrid/EmojiGrid";
import Modal from '../Modal/Modal';

interface IProps {
    cols: number | 5;
    rows: number | 6;
    language: string | "fr";
}

interface IState {
    gameGrid: string[][];
    activeAttempt: number;
    activeLetter: number;
    isOver: boolean;
    isWon: boolean;
    solution: string;
    colorGrid: string[][];
    correctLetters: string[];
    closeLetters: string[];
    incorrectLetters: string[];
    dict: string[];
    isModalOpen: boolean;
    modalMsg: string;
    currentAttempt: string;
}

const QUERY = gql`
query FindWordByWordBankNameQuery($name: String!) {
    findWordByWordBankName: findWordByWordBankName(name: $name) {
        word
    }
}
`;


function GameLogic(props: IProps) {

    /**
    * 
    * @param row The row number
    * @param col The column number
    * @returns gameGrid[row][col]
    */
    const generateGameGrid = (row: number, col: number): string[][] => {
        return new Array(row)
            .fill("")
            .map(() =>
                new Array(col).fill("")
            );
    }

    const rows = props.rows;
    const cols = props.cols;
    const language = props.language;

    const [gameGrid, setGameGrid] = useState(generateGameGrid(rows, cols));
    const solution = useRef("");
    const [colorGrid, setColorGrid] = useState(generateGameGrid(rows, cols));
    const activeAttempt = useRef(0);
    const activeLetter = useRef(0);
    const isOver = useRef(false);
    const isWon = useRef(false);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [closeLetters, setCloseLetters] = useState([]);
    const [incorrectLetters, setIncorrectLetters] = useState([]);
    const dict = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMsg, setModalMsg] = useState("");
    const currentAttempt = useRef("");
    const timer = useRef(null);

    const [getQuery, {loading, error, data: myDict}] = useLazyQuery(QUERY,{ 
        variables: {name: 'fr'}
    });

    useEffect(() => {
        if (myDict) {
            dict.current = myDict.findWordByWordBankName.map(word => word.word);
            solution.current = dict.current[Math.floor(Math.random() * dict.current.length)];
        }
      }, [myDict])

    useEffect(() => {
        getQuery();
        // Anything in here is fired on component mount.
        eventBus.on('keyPress', handleKeyPress);
        return () => {
            // Anything in here is fired on component unmount.
            eventBus.remove('keyPress', handleKeyPress);
        }
    }, []);

    const handleKeyPress = (key) => {
        key = key.message;
        if (isOver.current) {
            setIsModalOpen(true);
            return;
        }
        if (key.length === 1) {
            writeLetter(key);
        }
        if (key === "ENTER" || key === "Play") {
            playLine();
        }
        if (key === "BACKSPACE" || key === "Delete") {
            deleteLetter();
        }
    }

    /**
     * Write a letter in the game grid
     * @param letter The letter to add to the current attempt
     * @returns boolean True ifwhen the letter is writting in the current attempt
     */
    const writeLetter = (letter: string): void => {
        if (checkGameOver()) {
            return;
        }

        if(activeAttempt.current === 0 && activeLetter.current === 1) {
            timer.current = performance.now();
        }

        //s'il y a deja 5 lettres dans le current attempt, on ajoute rien
        if (activeLetter.current > 4) { return }

        updateGameGrid(activeAttempt.current, activeLetter.current, letter);
        updateActiveMove(activeAttempt.current, activeLetter.current + 1);
    }

    /**
     * delete the last letter of the current attempt
     * @returns boolean True if when the letter is deleted from the current attempt
     */
    const deleteLetter = (): boolean => {
        if (checkGameOver()) {
            return;
        }

        // if there is no letter to delete, we return
        if (activeLetter.current < 1) { return false }

        updateGameGrid(activeAttempt.current, activeLetter.current - 1, "")
        updateActiveMove(activeAttempt.current, activeLetter.current - 1);

        return true
    }

    /**
     * Play the line of the game grid
     * @returns boolean True if the line is played without error
     */
    const playLine = () => {
        if (checkGameOver()) {
            return;
        }

        if (!checkActiveMove()) {
            return;
        }

        let currentAttempt = retriveCurrentAttempt();

        //Making sure the attempt is a real word
        if (!testAttempt(currentAttempt)) {
            console.log("Word not found in dictionnary")
            return;
        }

        generateColorGrid(currentAttempt);

        //Check if the attempt is correct
        checkGameStatus();
    }

    const generateColorGrid = (currentAttempt: string) => {

        //Var used to make sure the color are correct and a single letter dosnt color 2 letterbox
        let alreadyFound = Array(5).fill(false)
        let alreadyUsed = Array(5).fill(false)

        //First pass to make sure a later correct letter doesnt rign a close to second of the same letters
        for (let i = 0; i < currentAttempt.length; i++) {
            if (currentAttempt[i] === solution.current[i]) {
                alreadyFound[i] = true
                alreadyUsed[i] = true
                updateColorGrid(activeAttempt.current, i, "correct")
                if (!correctLetters.includes(currentAttempt[i])) {
                    setCorrectLetters([...correctLetters, currentAttempt[i]])
                }
            }
        }

        //Compare Attempt to solution letter per letter and gives the good color to keys and letterbox
        for (let i = 0; i < currentAttempt.length; i++) {
            for (let j = 0; j < solution.current.length; j++) {
                if (currentAttempt[i] === solution.current[j] && !alreadyFound[j] && !alreadyUsed[i]) {
                    if (i === j) {

                        updateColorGrid(activeAttempt.current, i, "correct")

                        if (!correctLetters.includes(currentAttempt[i])) {
                            setCorrectLetters([...correctLetters, currentAttempt[i]])
                        }
                    } else {

                        updateColorGrid(activeAttempt.current, i, "close")

                        if (!closeLetters.includes(currentAttempt[i])) {
                            setCloseLetters([...closeLetters, currentAttempt[i]])
                        }
                    }
                }
            }

            //Second pass to make sure a later correct letter doesnt rign a close to second of the same letters
            if (colorGrid[activeAttempt.current][i] === "") {

                updateColorGrid(activeAttempt.current, i, "incorrect")

                if (!incorrectLetters.includes(currentAttempt[i])) {
                    setIncorrectLetters([...incorrectLetters, currentAttempt[i]])
                }
            }
        }
    }

    /**
     * 
     * @returns boolean True if the game is won
     * @description Check if the game is won
     */
    const checkGameStatus = (): void => {
        //Check if the game is over
        if (retriveCurrentAttempt() === solution.current) {
            timer.current = performance.now() - timer.current
            console.log(`You won! ${timer.current/1000} seconds`)
            updateGameStatus(true, true)
            openModal("You won!")
            return;
        } else if (activeAttempt.current === 5) {
            timer.current = performance.now() - timer.current
            console.log(`You lost! ${timer.current/1000} seconds`)
            updateGameStatus(false, true)
            openModal("You lost!")
                        return;
        } else {
            activeAttempt.current++
            activeLetter.current = 0
        }
    }

    const resetGame = () => {
        updateActiveMove(0, 0);
        setCorrectLetters([]);
        setCloseLetters([]);
        setIncorrectLetters([]);
        setColorGrid(generateGameGrid(rows, cols));
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                updateColorGrid(i, j, "")
                updateGameGrid(i, j, "");
            }
        }
        updateGameStatus(false, false)
        setModalMsg("")
        setIsModalOpen(false)
        eventBus.dispatch('resetGame', true);
        currentAttempt.current = "";
        timer.current = 0;
        solution.current = dict.current[Math.floor(Math.random() * dict.current.length)];

    }

    /**
     * Open the modal
     * @param message The message to display in the modal
     */
    const openModal = (message: string) => {
        setIsModalOpen(true)
        setModalMsg(message)
    }

    /**
     * 
     * @param attempt The attempt to test
     * @returns boolean True if the attempt is a real word
     */
    const testAttempt = (attempt: string): boolean => {
        if (dict.current.includes(attempt.toLowerCase())) {
            return true
        }
        return false
    }

    /**
     * 
     * @param row The row number
     * @param col The column number
     * @param value The value to set
     */
    const updateGameGrid = (row: number, col: number, value: string) => {
        let tempGrid = [...gameGrid]
        tempGrid[row][col] = value
        eventBus.dispatch("gameGrid", gameGrid)
        setGameGrid(tempGrid)
    }

    /**
     * 
     * @param row The row number
     * @param col The column number
     * @param value The value to set
     */
    const updateColorGrid = (row: number, col: number, value: string) => {
        let tempGrid = [...colorGrid]
        tempGrid[row][col] = value
        eventBus.dispatch("colorGrid", colorGrid)
        setColorGrid(tempGrid)
    }

    /**
     * update the active move state
     * @param attempt The attempt number
     * @param letter the letter number
     * @returns 
     */
    const updateActiveMove = (attempt: number, letter: number): void => {
        activeAttempt.current = attempt;
        activeLetter.current = letter;
    }

    const updateGameStatus = (won: boolean, over: boolean): void => {
        isWon.current = won;
        isOver.current = over;
    }

    /**
     * check if the game is over
     * @returns boolean True if the game is over
     */
    const checkGameOver = () => {
        if (isOver.current) {
            console.log("Game already over.")
            return true
        }
        return false
    }

    /**
     * check the activeMove letter count
     * @returns boolean True if activeMove has the correct amount of letters
     */
    const checkActiveMove = (): boolean => {
        if (activeLetter.current <= 4) {
            console.log("Make sure you have 5 letters.")
            return false;
        }
        return true
    }

    /**
    * retrieve the current attempt in the game grid row
    * @returns string The current attempt
    */
    const retriveCurrentAttempt = (): string => {
        //Retreiving the attempt's letters
        let attempt = ""
        for (let i = 0; i < cols; i++) {
            attempt += gameGrid[activeAttempt.current][i]
        }

        currentAttempt.current = attempt.toLowerCase()

        return attempt.toLowerCase()
    }

    return (
        <>
            <GameBoard
                rows={rows}
                cols={cols}
                gameGrid={gameGrid}
                colorGrid={colorGrid} />
            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false)
                }}
                message={modalMsg}
                onSubmit={() => { resetGame(); setIsModalOpen(false) }}
                title={isWon ? "You won!" : "You lost!"}
                emojiGrid={<EmojiGrid rowSize={rows} colSize={cols} colorGrid={colorGrid} />}>
            </Modal>
        </>
    );
}

export default GameLogic;
