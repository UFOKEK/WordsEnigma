import React, { useContext } from 'react'
import { GameContext } from '../App'
import LetterBox from './LetterBox.tsx'
const Gameboard = () => {
    const { gamegrid } = useContext(GameContext);


    return <div className='gameboard'>
        {gamegrid.map((line, lineIndex) => {
            return <div className='line' key={lineIndex}>
                {line.map((letter, letterIndex) => {
                    return <LetterBox lineIndex={lineIndex} letterIndex={letterIndex} key={letterIndex} />

                })}
            </div>
        })}
    </div>
}

export default Gameboard