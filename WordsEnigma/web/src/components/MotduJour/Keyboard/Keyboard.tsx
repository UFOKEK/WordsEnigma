import React, { Component } from 'react';
import eventBus from '../EventBus/EventBus';
import './Keyboard.css';
import KeyCell from './KeyCell/KeyCell';


interface IProps {
  language: string;
}

interface IState {
  keys: string[];
  lineSize: number;
  lineArray: string[][];
}

class Keyboard extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      keys: [],
      lineSize: 3,
      lineArray: [[], [], []]
    };
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentDidMount() {
    console.log('Keyboard mounted');
    this.generateKeyboard();
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    console.log('Keyboard unmounted');
    document.removeEventListener('keydown', this.handleKeyPress)
  }
letter
  handleKeyPress(e) {
    if((/[a-zA-Z]/).test(e.key) && e.key !== undefined){
      console.log(e.key.toUpperCase());
      eventBus.dispatch("keyPress", { message: e.key.toUpperCase() });
      return;
    } else if (e.target.classList.contains('letter')) {
      console.log(e.target.innerText);
      eventBus.dispatch("keyPress", { message: e.target.innerText });
    }
  }

  generateKeyboard() {
    if (this.props.language === 'fr' || this.props.language === 'en') {
      this.setState({
        lineSize: 3,
        lineArray: [
          ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
          ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
          ['Play', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Delete'],
        ],
      });
    }
  }

  render() {
    return (
      <div className="keyboard">
        {this.state.lineArray.map((line, index) => {
          return (
            <div className="line" key={index}>
              {line.map((letter, index) => {
                return (
                  <KeyCell key={index} letter={letter} onClick={this.handleKeyPress} />
                );
              }
              )}
            </div>
          );
        }
        )}
      </div>
    );
  }
}


export default Keyboard;
