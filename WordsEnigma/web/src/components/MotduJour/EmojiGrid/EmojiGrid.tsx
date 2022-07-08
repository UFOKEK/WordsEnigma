import React, { Component } from 'react';
import './EmojiGrid.css';


interface IProps {
    message: string;
    rowSize: number;
    colSize: number;
}

interface IState {
    rowSize: number;
    colSize: number;
    colorGrid: string[][];
}

class EmojiGrid extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            rowSize: this.props.rowSize,
            colSize: this.props.colSize,
            colorGrid: Array(this.props.rowSize).fill(Array(this.props.colSize).fill('')),
        }
    }

    generateEmojiGrid = () => {
        var traduction = []
        for (var i = 0; i < (this.state.colorGrid.length); i++) {
            for (var j = 0; j < (this.state.colorGrid[i].length); j++) {
                if (this.state.colorGrid[i][j] === 'incorrect') {
                    traduction.push("⬛")
                }
                else if (this.state.colorGrid[i][j] === 'close') {
                    traduction.push("🟥")
                }
                else if (this.state.colorGrid[i][j] === 'correct') {
                    traduction.push("🟩")
                }
            }
            if (this.state.colorGrid[i + 1] != null && this.state.colorGrid[i + 1][0] !== '') { traduction.push("\n") }

        }
        return traduction.join('')
    }

    render() {
        return (
            <div className="emojiGrid">
                {this.generateEmojiGrid()}
            </div>
        );
    }
}