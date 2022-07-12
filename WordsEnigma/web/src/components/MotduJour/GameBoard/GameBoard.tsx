import React, { Component } from 'react';
import eventBus from '../EventBus/EventBus';
import './GameBoard.css';


interface IProps {
  cols: number | 5;
  rows: number | 6;
  gameGrid: string[][];
  colorGrid: string[][];
}

interface IState {
  gameGrid: string[][];
  colorGrid: string[][];
}

class GameBoard extends Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      gameGrid: this.props.gameGrid,
      colorGrid: this.props.colorGrid,
    };
  }

      /**
    * 
    * @param row The row number
    * @param col The column number
    * @returns gameGrid[row][col]
    */
    generateGameGrid = (row: number, col: number): string[][] => {
        return new Array(row)
            .fill("")
            .map(() =>
                new Array(col).fill("")
            );
    }

  componentDidMount() {
    eventBus.on('gameGrid', (gameGrid) => {
      this.setState({
        gameGrid: gameGrid,
      });
    });
    eventBus.on('colorGrid', (colorGrid) => {
      this.setState({
        colorGrid: colorGrid,
      });
    });
    eventBus.on('resetGame', () => {
      this.setState({
        gameGrid: this.generateGameGrid(this.props.rows, this.props.cols),
        colorGrid: this.generateGameGrid(this.props.rows, this.props.cols),
      });
    }
    );
  }



  renderGrid() {
    const { cols, rows } = this.props;
    const grid = [];
    for (let i = 0; i < rows; i++) {
      grid.push(
        <div className="row" key={i}>
          {this.renderRow(i, cols)}
        </div>
      );
    }
    return grid;
  }

  renderRow(row, cols) {
    const rowGrid = [];
    for (let i = 0; i < cols; i++) {
      rowGrid.push(
        <div className="col" key={i}>
          {this.renderCell(row, i)}
        </div>
      );
    }
    return rowGrid;
  }

  renderCell(row, col) {
    return <div className={"cell " + this.props.colorGrid[row][col]}>{this.props.gameGrid[row][col]}</div>;
  }


  render() {
    return (
      <div className="gameBoard">
        <div className="gameBoard__grid">
          {this.renderGrid()}
        </div>
      </div>
    );
  }
}

export default GameBoard;
