import React from "react";
import "../index.css";
import Board from "./Board";
import calculateWinner from "../helper";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [Array(9).fill(null)],
      stepNumber: 0,
      xIsNext: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    const xO = this.state.xIsNext ? "X" : "O";
    const historyPoint = this.state.history.slice(0, this.state.stepNumber + 1);
    const currentStep = historyPoint[this.state.stepNumber];
    const newArraySquares = [...currentStep];
    const winner = calculateWinner(this.state.history[this.state.stepNumber]);
    if (winner || newArraySquares[i]) return;
    newArraySquares[i] = xO;
    this.setState({
      history: [...historyPoint, newArraySquares],
      stepNumber: historyPoint.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  renderMoves() {
    return this.state.history.map((_step, move) => {
      //_step là value, move là index
      const destination = move ? `Go to move #${move}` : "Reload";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  }

  render() {
    const xO = this.state.xIsNext ? "X" : "O";
    const winner = calculateWinner(this.state.history[this.state.stepNumber]);
    return (
      <div className="flex flex-fd-c flex-ai-c flex-jc-c">
        <h1>Welcome to Tic-Tac-Toe</h1>
        <Board
          square={this.state.history[this.state.stepNumber]}
          onClick={this.handleClick}
        />
        <div className="info-wrapper">
          <h3 style={{ alignSelf: "center" }}>History</h3>
          <div>
            <ul class="flex">{this.renderMoves()}</ul>
          </div>
          <h3 style={{ alignSelf: "center" }}>
            {winner ? "Winner: " + winner : "Next Player: " + xO}
          </h3>
        </div>
      </div>
    );
  }
}
