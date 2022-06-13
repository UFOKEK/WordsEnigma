
import Title from "./component/Title";
import Rules from "./component/Rules";
import Gameboard from "./component/Gameboard";
import Keyboard from "./component/Keyboard";
import React, { useState } from 'react'
import { dictFr } from "./data/fr";
import Modal from "./component/Modal";

export const GameContext = React.createContext()

const defaultGrid = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

const defaultColorGrid = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

function App() {
    //Modal Component
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalMsg, setModalMsg] = useState()
    //Game info
    const [gamegrid, setGamegrid] = useState(defaultGrid)
    const [activeMove, setActiveMove] = useState({ attempt: 0, letter: 0 })
    const [gameStatus, setGameStatus] = useState({ isOver: false, isWon: false })
    const [solution, setSolution] = useState("GRAND")
    let attempt = [];

    //State to change the color of the letterbox on the gameboard
    const [colorGrid, setColorGrid] = useState(defaultColorGrid)

    //State to change the color of the keys on the keyboard
    const [correctLetters, setCorrectLetters] = useState([])
    const [closeLetters, setCloseLetters] = useState([])
    const [incorrectLetters, setIncorrectLetters] = useState([])

    const testAttempt = (attempt) => {
        if (dictFr.includes(attempt.toLowerCase())) {
            return true
        }
        return false

    }

    const writeLetter = (letter) => {

        if (gameStatus.isOver) {
            openModal("Game already over.")
            console.log("Game already over.")
            return
        }
        //s'il y a deja 5 lettres dans le current attempt, on ajoute rien
        if (activeMove.letter > 4) { return }

        let tempGrid = [...gamegrid]
        tempGrid[activeMove.attempt][activeMove.letter] = letter
        setGamegrid(tempGrid)
        setActiveMove({ attempt: activeMove.attempt, letter: activeMove.letter + 1 })
    }
    const deleteLetter = () => {

        if (gameStatus.isOver) {
            openModal("Game already over.")
            console.log("Game already over.")
            return
        }
        //S'il n'y a pas de lettre dans le current attempt, on ne delete rien
        if (activeMove.letter < 1) { return }

        let tempGrid = [...gamegrid]
        tempGrid[activeMove.attempt][activeMove.letter - 1] = ""
        setGamegrid(tempGrid)
        setActiveMove({ attempt: activeMove.attempt, letter: activeMove.letter - 1 })
    }
    const playLine = () => {
        if (gameStatus.isOver) {
            openModal("Game already over.")
            console.log("Game already over.")
            return
        }

        //S'assurer que le mot a 5 lettres
        if (activeMove.letter <= 4) {
            openModal("Make sure you have 5 letters.")
            console.log("Make sure you have 5 letters.")
            return
        }


        //Retreiving the attempt's letters
        for (let i = 0; i < 5; i++) {
            attempt += (gamegrid[activeMove.attempt][i])
        }

        //Making sure the attempt is a real word
        if (!testAttempt(attempt)) {
            openModal("Word not found in dictionnary")
            console.log("Word not found in dictionnary")
            return
        }


        //Var used to make sure the color are correct and a single letter dosnt color 2 letterbox
        let alreadyFound = Array(5).fill(false)
        let alreadyUsed = Array(5).fill(false)

        //First pass to make sure a later correct letter doesnt rign a close to second of the same letters
        for (let i = 0; i < attempt.length; i++) {
            let tempoGrid = colorGrid
            if (attempt[i] === solution[i]) {
                alreadyFound[i] = true
                alreadyUsed[i] = true
                tempoGrid[activeMove.attempt][i] = "correct"
                if (!correctLetters.includes(attempt[i])) { setCorrectLetters(state => [...state, attempt[i]]) }
                setColorGrid(tempoGrid)
            }
        }
        //Compare Attempt to solution letter per letter and gives the good color to keys and letterbox
        for (let i = 0; i < attempt.length; i++) {
            let tempoGrid = colorGrid
            for (let j = 0; j < solution.length; j++) {
                if (attempt[i] === solution[j] && !alreadyFound[j] && !alreadyUsed[i]) {
                    if (i === j) {
                        tempoGrid[activeMove.attempt][i] = "correct"
                        if (!correctLetters.includes(attempt[i])) { setCorrectLetters(state => [...state, attempt[i]]) }

                    }
                    if (i !== j) {
                        tempoGrid[activeMove.attempt][i] = "close"
                        if (!closeLetters.includes(attempt[i])) { setCloseLetters(state => [...state, attempt[i]]) }
                    }
                }
            }
            if (tempoGrid[activeMove.attempt][i] === "") {
                tempoGrid[activeMove.attempt][i] = "incorrect"
                if (!incorrectLetters.includes(attempt[i])) { setIncorrectLetters(state => [...state, attempt[i]]) }
            }
            setColorGrid(tempoGrid)
        }

        if (attempt === solution) {
            setGameStatus({ isOver: true, isWon: true })
            openModal("You won!")
            console.log("You won!")
            return
        }
        setActiveMove({ attempt: activeMove.attempt + 1, letter: 0 })
        if (activeMove.attempt === 5) {
            setGameStatus({ isOver: true, isWon: false })
            openModal("You lost!")
            console.log("You lost!")
        }
    }

    const openModal = (message) => {
        if (gameStatus.isOver) {
            //Transform colorGrid to emoji of user solution


            //setModalMsg(emojiEnd())

            setIsModalOpen(true)
            return
        }
        setIsModalOpen(true)
        setModalMsg(message)
    }


    return (

        <GameContext.Provider
            value={{
                gamegrid, setGamegrid,
                colorGrid,
                activeMove, setActiveMove,
                writeLetter, deleteLetter,
                playLine, correctLetters,
                incorrectLetters, closeLetters,
                setIsModalOpen
            }}>
            <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} msg={modalMsg} colorGrid={colorGrid} gameStatus={gameStatus.isOver} />
            <Title />
            <Gameboard />
            <Rules />
            <Keyboard />
        </GameContext.Provider>


    );
}

export default App;
