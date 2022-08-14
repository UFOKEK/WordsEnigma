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
        <div className="title">{this.props.title}</div>
      </header>

    );
  }

}

export default Header;
