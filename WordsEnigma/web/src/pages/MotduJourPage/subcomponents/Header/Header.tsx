import React, { Component } from 'react';
import './Header.css';


interface IProps {
  title: string;
}

interface IState {
}

class Header extends Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="title">Mot du jour!</div>
      </header>

    );
  }

}

export default Header;
