import React, { Component } from 'react';
import './Rules.css';


interface IProps {
  grey: string;
  green: string;
  blue: string;
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
        <div> {this.props.grey} </div>
        <div className="green"></div>
        <div> {this.props.green} </div>
        <div className="blue"></div>
        <div> {this.props.blue} </div>
      </div>
    );
  }
}

export default Rules;

