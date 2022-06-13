import React, { Component } from 'react';
import './Rules.css';


interface IProps {
}

interface IState {
}


class Rules extends Component<IProps, IState> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="rules">
        <div className="grey"></div>
        <div> Pas dans le mot </div>
        <div className="green"></div>
        <div> Mauvaise position </div>
        <div className="blue"></div>
        <div> Parfait! </div>
      </div>
    );
  }
}

export default Rules;

