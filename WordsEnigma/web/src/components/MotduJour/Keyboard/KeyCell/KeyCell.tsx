import React, { Component } from 'react';
import './KeyCell.css';


interface IProps {
    letter: string;
    onClick: (e) => void;
}

interface IState {

}

class KeyCell extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(): React.ReactNode {
        if (this.props.letter === 'Play') {
            return (
                <div className='letter play doubleSpace' onClick={this.props.onClick}>
                    {this.props.letter}
                </div>
            )
        } else if (this.props.letter === 'Delete') {
            return (
                <div className='letter delete doubleSpace' onClick={this.props.onClick}>
                    {this.props.letter}
                </div>
            )
        } else {
            return (
                <div className='letter' onClick={this.props.onClick}>
                    {this.props.letter}
                </div>
            )
        }
    }

}

export default KeyCell;
