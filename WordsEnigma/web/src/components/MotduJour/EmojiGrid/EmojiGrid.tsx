import React, { Component } from 'react';
import eventBus from '../EventBus/EventBus';
import './EmojiGrid.css';


interface IProps {
    rowSize: number;
    colSize: number;
    colorGrid: string[][];
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
            rowSize: props.rowSize,
            colSize: props.colSize,
            colorGrid: props.colorGrid,
        }
    }

    componentDidMount() {
        eventBus.on('colorGrid', (colorGrid) => {
            this.setState({
                colorGrid: colorGrid,
            });
        });
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
            if (this.state.colorGrid[i + 1] != null && this.state.colorGrid[i + 1][0] !== '') { 
                traduction.push("\n") 
            }

        }
        return traduction
    }

    render() {
        return (
            <div className="emojiGrid">
                {
                this.generateEmojiGrid().map((emoji, index) => {
                    if (emoji === '\n') {
                        return <br key={index} />
                    } else {
                        return <span key={index}>{emoji}</span>
                    }
                })
            }
            </div>
        );
    }
}

export default EmojiGrid;