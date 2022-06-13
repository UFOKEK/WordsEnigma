import React, { Component } from 'react';
import './Success.css';


interface IProps {
}

interface IState {
}


class Success extends Component<IProps, IState> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="success"></div>
      );
  }
}

export default Success;

