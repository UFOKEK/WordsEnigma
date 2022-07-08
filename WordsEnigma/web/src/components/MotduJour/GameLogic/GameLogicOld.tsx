import { Component } from "react";

import eventBus from "../EventBus/EventBus";
import GameBoard from '../GameBoard/GameBoard';
import Modal from '../Modal/Modal';

interface IProps {
    cols: number | 5;
    rows: number | 6;
}

interface IState {
    gameGrid: string[][];
    activeMove: {
        attempt: number;
        letter: number;
    };
    gameStatus: {
        isOver: boolean;
        isWon: boolean;
    };
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
query FindFindWordByWordBankIdQuery($id: String!) {
    findWordByWordBankId: findWordByWordBankId(id: $id) {
        id
        word
        definition
    }
}
`;

// TODO change the name of the component to context react
class GameLogic extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            gameGrid: this.generateGameGrid(this.props.rows, this.props.cols),
            colorGrid: this.generateGameGrid(this.props.rows, this.props.cols),
            activeMove: {
                attempt: 0,
                letter: 0
            },
            gameStatus: {
                isOver: false,
                isWon: false
            },
            solution: "pomme",
            correctLetters: [],
            closeLetters: [],
            incorrectLetters: [],
            dict: this.getDict(),
            isModalOpen: false,
            modalMsg: "",
            currentAttempt: ""
        };
    }

    componentDidMount = () => {
        eventBus.on('keyPress', (key) => {
            this.handleKeyPress(key.message);
        });
    }

    /**
     * handle the key press
     * @param key The key pressed
     * @returns 
     */
    handleKeyPress = (key: string): void => {
        if (this.state.gameStatus.isOver) {
            return;
        }
        if (key.length === 1) {
            this.writeLetter(key);
        }
        if (key === "ENTER" || key === "Play") {
            this.playLine();
        }
        if (key === "BACKSPACE" || key === "Delete") {
            this.deleteLetter();
        }
        if (key === "Enter") {
            this.setState({
                isModalOpen: false,
            })
        }
    }


    /**
     * Write a letter in the game grid
     * @param letter The letter to add to the current attempt
     * @returns boolean True ifwhen the letter is writting in the current attempt
     */
    writeLetter = (letter: string): boolean => {
        if (this.checkGameOver()) {
            return false
        }

        //s'il y a deja 5 lettres dans le current attempt, on ajoute rien
        if (this.state.activeMove.letter > 4) { return }

        this.updateGameGrid(this.state.activeMove.attempt, this.state.activeMove.letter, letter)

        this.setState({
            activeMove: {
                attempt: this.state.activeMove.attempt,
                letter: this.state.activeMove.letter + 1
            }
        })
        return true
    }

    /**
     * delete the last letter of the current attempt
     * @returns boolean True if the game is won
     */
    deleteLetter = (): boolean => {
        if (this.checkGameOver()) {
            return false
        }

        // if there is no letter to delete, we return
        if (this.state.activeMove.letter < 1) { return false }

        this.updateGameGrid(this.state.activeMove.attempt, this.state.activeMove.letter - 1, "")
        this.setState({
            activeMove: {
                attempt: this.state.activeMove.attempt,
                letter: this.state.activeMove.letter - 1
            }
        })
    }

    /**
     * Play the line of the game grid
     * @returns boolean True if the line is played without error
     */
    playLine = () => {
        if (this.checkGameOver()) {
            return false
        }

        if (!this.checkActiveMove()) {
            return false;
        }

        let currentAttempt = this.retriveCurrentAttempt();
        this.setState({
            currentAttempt: currentAttempt
        })

        //Making sure the attempt is a real word
        if (!this.testAttempt(currentAttempt)) {
            console.log("Word not found in dictionnary")
            return
        }


        this.generateColorGrid(currentAttempt);

        //Check if the attempt is correct
        this.checkGameStatus()
    }

    generateColorGrid = (currentAttempt: string) => {

        //Var used to make sure the color are correct and a single letter dosnt color 2 letterbox
        let alreadyFound = Array(5).fill(false)
        let alreadyUsed = Array(5).fill(false)

        //First pass to make sure a later correct letter doesnt rign a close to second of the same letters
        for (let i = 0; i < currentAttempt.length; i++) {
            if (currentAttempt[i] === this.state.solution[i]) {
                alreadyFound[i] = true
                alreadyUsed[i] = true
                this.updateColorGrid(this.state.activeMove.attempt, i, "correct")
                if (!this.state.correctLetters.includes(currentAttempt[i])) {
                    this.setState({
                        correctLetters: [...this.state.correctLetters, currentAttempt[i]],
                    })
                }
            }
        }

        //Compare Attempt to solution letter per letter and gives the good color to keys and letterbox
        for (let i = 0; i < currentAttempt.length; i++) {
            for (let j = 0; j < this.state.solution.length; j++) {
                if (currentAttempt[i] === this.state.solution[j] && !alreadyFound[j] && !alreadyUsed[i]) {
                    if (i === j) {

                        this.updateColorGrid(this.state.activeMove.attempt, i, "correct")

                        if (!this.state.correctLetters.includes(currentAttempt[i])) {
                            this.setState({
                                correctLetters: [...this.state.correctLetters, currentAttempt[i]],
                            })
                        }
                    } else {

                        this.updateColorGrid(this.state.activeMove.attempt, i, "close")

                        if (!this.state.closeLetters.includes(currentAttempt[i])) {
                            this.setState({
                                closeLetters: [...this.state.closeLetters, currentAttempt[i]],
                            })
                        }
                    }
                }
            }

            //Second pass to make sure a later correct letter doesnt rign a close to second of the same letters
            if (this.state.colorGrid[this.state.activeMove.attempt][i] === "") {

                this.updateColorGrid(this.state.activeMove.attempt, i, "incorrect")

                if (!this.state.incorrectLetters.includes(currentAttempt[i])) {
                    this.setState({
                        incorrectLetters: [...this.state.incorrectLetters, currentAttempt[i]],
                    })
                }
            }


        }
    }

    /**
     * 
     * @returns boolean True if the game is won
     * @description Check if the game is won
     */
    checkGameStatus = (): boolean => {
        //Check if the game is over
        if (this.retriveCurrentAttempt() === this.state.solution) {
            console.log("You won!")
            this.setState({
                gameStatus: {
                    isOver: true,
                    isWon: true
                }
            })
            return true;
        } else if (this.state.activeMove.attempt === 5) {
            console.log("You lost!")
            this.setState({
                gameStatus: {
                    isOver: true,
                    isWon: false
                }
            })
            return false;
        } else {
            this.setState({
                activeMove: {
                    attempt: this.state.activeMove.attempt + 1,
                    letter: 0
                }
            });
        }
    }

    resetGame() {
        // Update the gameGrid
        this.setState({
            currentAttempt: "",
            gameStatus: {
                isOver: false,
                isWon: false
            },
            activeMove: {
                attempt: 0,
                letter: 0
            }
        })
    }


    /**
     * Open the modal
     * @param message The message to display in the modal
     */
    openModal = (message: string) => {
        this.setState({
            isModalOpen: true,
            modalMsg: message
        })
    }

    /**
     * 
     * @param attempt The attempt to test
     * @returns boolean True if the attempt is a real word
     */
    testAttempt = (attempt: string): boolean => {
        if (this.state.dict.includes(attempt.toLowerCase())) {
            return true
        }
        return false
    }

    /**
     * 
     * @param row The row number
     * @param col The column number
     * @returns gameGrid[row][col]
     */
    generateGameGrid = (row: number, col: number): string[][] => {
        return new Array(row)
            .fill("")
            .map(() =>
                new Array(col).fill("")
            );
    }

    /**
     * 
     * @param gameGrid The game grid
     */
    setGameGrid = (gameGrid: string[][]) => {
        eventBus.dispatch("gameGrid", gameGrid)
        this.setState({
            gameGrid: gameGrid
        })
    }

    /**
     * 
     * @param row The row number
     * @param col The column number
     * @param value The value to set
     */
    updateGameGrid = (row: number, col: number, value: string) => {
        let tempGrid = [...this.state.gameGrid]
        tempGrid[row][col] = value
        this.setGameGrid(tempGrid);
    }

    /**
     * 
     * @param gameGrid The game grid
     */
    setColorGrid = (colorGrid: string[][]) => {
        eventBus.dispatch("colorGrid", colorGrid)
        this.setState({
            colorGrid: colorGrid
        })
    }

    /**
     * 
     * @param row The row number
     * @param col The column number
     * @param value The value to set
     */
    updateColorGrid = (row: number, col: number, value: string) => {
        let tempGrid = [...this.state.colorGrid]
        tempGrid[row][col] = value
        this.setColorGrid(tempGrid);
    }

    /**
     * check if the game is over
     * @returns boolean True if the game is over
     */
    checkGameOver = () => {
        if (this.state.gameStatus.isOver) {
            console.log("Game already over.")
            return true
        }
        return false
    }

    /**
     * check the activeMove letter count
     * @returns boolean True if activeMove has the correct amount of letters
     */
    checkActiveMove = (): boolean => {
        if (this.state.activeMove.letter <= 4) {
            console.log("Make sure you have 5 letters.")
            return false;
        }
        return true
    }

    /**
    * retrieve the current attempt in the game grid row
    * @returns string The current attempt
    */
    retriveCurrentAttempt = (): string => {
        //Retreiving the attempt's letters
        let currentAttempt = ""
        for (let i = 0; i < this.props.cols; i++) {
            currentAttempt += this.state.gameGrid[this.state.activeMove.attempt][i]
        }
        this.setState({
            currentAttempt: currentAttempt.toLowerCase()
        })
        return currentAttempt.toLowerCase()
    }

    getDict = (): string[] => {
        return ["pomme"]
    }

    render = (): React.ReactNode => {
        return (
            <>
                <GameBoard
                    rows={6}
                    cols={5}
                    gameGrid={this.state.gameGrid}
                    colorGrid={this.state.colorGrid} />
                <Modal
                    isOpen={this.state.isModalOpen}
                    onClose={() => this.setState({ isModalOpen: false })}
                    message={this.state.modalMsg}
                    onSubmit={() => this.setState({ isModalOpen: false })}
                    title={this.state.gameStatus.isWon ? "You won!" : "You lost!"}
                    componant={null}
                />
            </>
        )
    }

}

export default GameLogic;