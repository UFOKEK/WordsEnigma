import React, { Component } from 'react';
import eventBus from '../../EventBus/EventBus';
import './Keyboard.css';


interface IProps {
}

interface IState {
}

class Keyboard extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    console.log(e.target.innerText);
    eventBus.dispatch("keyPress", { message: e.target.innerText });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');

    document.addEventListener('keydown', function (event) {
      console.log(event.key);
      eventBus.dispatch("keyPress", { message: event.key });
    });
  }

  componentDidMount() {
    console.log('Keyboard mounted');
  }

  componentWillUnmount() {
    console.log('Keyboard unmounted');
  }


  render() {
    return (
      <div className="keyboard">
        <div className="line">
          <div className="letter" onClick={this.onClick}>Q</div>
          <div className="letter" onClick={this.onClick}>W</div>
          <div className="letter" onClick={this.onClick}>E</div>
          <div className="letter" onClick={this.onClick}>R</div>
          <div className="letter" onClick={this.onClick}>T</div>
          <div className="letter" onClick={this.onClick}>Y</div>
          <div className="letter" onClick={this.onClick}>U</div>
          <div className="letter" onClick={this.onClick}>I</div>
          <div className="letter" onClick={this.onClick}>O</div>
          <div className="letter" onClick={this.onClick}>P</div>
        </div>
        <div className="line">
          <div className="letter" onClick={this.onClick}>A</div>
          <div className="letter" onClick={this.onClick}>S</div>
          <div className="letter" onClick={this.onClick}>D</div>
          <div className="letter" onClick={this.onClick}>F</div>
          <div className="letter" onClick={this.onClick}>G</div>
          <div className="letter" onClick={this.onClick}>H</div>
          <div className="letter" onClick={this.onClick}>J</div>
          <div className="letter" onClick={this.onClick}>K</div>
          <div className="letter" onClick={this.onClick}>L</div>
        </div>
        <div className="line">
          <div className="doubleSpace" onClick={this.onClick}>Play</div>
          <div className="letter" onClick={this.onClick}>Z</div>
          <div className="letter" onClick={this.onClick}>X</div>
          <div className="letter" onClick={this.onClick}>C</div>
          <div className="letter" onClick={this.onClick}>V</div>
          <div className="letter" onClick={this.onClick}>B</div>
          <div className="letter" onClick={this.onClick}>N</div>
          <div className="letter" onClick={this.onClick}>M</div>
          <div className="doubleSpace" onClick={this.onClick}>Del</div>
        </div>
      </div>
    );
  }
}


export default Keyboard;
