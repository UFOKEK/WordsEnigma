import React from 'react'
import ReactDom from 'react-dom'

const Modal = ({ open, onClose, msg, colorGrid, gameStatus }) => {
    if (!open) { return }
    const modalStyle = {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        zIndex: 1000,
        backgroundColor: 'black',
        padding: '30px',
        textAlign: ' center'

    }
    const modalBackground = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 1000
    }
    const emojiGrid = () => {
        var traduction = []
        for (var i = 0; i < (colorGrid.length); i++) {
            for (var j = 0; j < (colorGrid[i].length); j++) {
                if (colorGrid[i][j] === 'incorrect') {
                    traduction.push("⬛")
                }
                else if (colorGrid[i][j] === 'close') {
                    traduction.push("🟥")
                }
                else if (colorGrid[i][j] === 'correct') {
                    traduction.push("🟩")
                }
            }
            if (colorGrid[i + 1] != null && colorGrid[i + 1][0] !== '') { traduction.push("\n") }

        }
        return traduction.join('')

    }


    return ReactDom.createPortal(<>
        <div style={modalBackground} onClick={onClose} />
        {(!gameStatus ?
            <div style={modalStyle}>{msg}</div> :
            <div style={modalStyle}><h3 >{msg}</h3>{emojiGrid()}</div>
        )}

    </>, document.getElementById('portal')
    )
}

export default Modal