import React, { Component } from 'react';
import './Rules.css';


interface IProps {
  notInWord: string;
  badPosition: string;
  goodPosition: string;
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
        <div> {this.props.notInWord} </div>
        <div className="red"></div>
        <div> {this.props.badPosition} </div>
        <div className="green"></div>
        <div> {this.props.goodPosition} </div>
      </div>
    );
  }
}

export default Rules;

