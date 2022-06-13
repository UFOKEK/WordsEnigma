import React, { useCallback, useContext, useEffect } from 'react'
import Key from './Key'

import { GameContext } from '../App'
const Keyboard = () => {
    const { deleteLetter, playLine, writeLetter, activeMove, setIsModalOpen } = useContext(GameContext);
    const keys = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",], ["A", "S", "D", "F", "G", "H", "J", "K", "L"], ["PLAY", "Z", "X", "C", "V", "B", "N", "M", "DELETE"]];

    const handleKeyboard = useCallback((event) => {
        if ((/[a-zA-Z]/).test(event.key)) {
            if (event.key.length === 1) {
                writeLetter(event.key.toLocaleUpperCase())
            }
            if (event.key === "Enter") {
                playLine()
            }
            if (event.key === "Delete" || event.key === "Backspace") {
                deleteLetter()
            }
            if (event.key === "Escape") {
                setIsModalOpen(false)
            }
        }
    }, [writeLetter, playLine, deleteLetter])
    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard)
        return () => { document.removeEventListener('keydown', handleKeyboard) }
    }, [handleKeyboard])

    return (
        <div className='Keyboard' >
            {
                keys.map((line, index) => {
                    return <div className='line' key={index}>
                        {line.map((keyVal, index) => {
                            if (keyVal === "PLAY") {
                                return <div className='play doubleSpace' onClick={playLine} key={index}>{keyVal}</div>
                            }
                            if (keyVal === "DELETE") {
                                return <div className='delete doubleSpace' onClick={deleteLetter} key={index}>{keyVal}</div>
                            }
                            return <Key keyVal={keyVal} index={index} />
                            //<div className='letter' onClick={()=>writeLetter(keyVal)} key={index}>{keyVal}</div>     
                        }
                        )}
                    </div>
                })
            }
        </div>
    )
}

export default Keyboard