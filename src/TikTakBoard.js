import React, { PureComponent } from "react";
import Box from "./Box";
class TikTakBoard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      moves: Array(9).fill(null),
      chanceFlag: true
    };
  }
  checkWinner = moves => {
    const winnerCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winnerCases.length; i++) {
      const [a, b, c] = winnerCases[i];
      if (moves[a] && moves[a] === moves[b] && moves[a] === moves[c]) {
        return moves[a];
      }
    }
    return null;
  };
  onMoveHandler = i => {
    const moves = [...this.state.moves];
    if (!moves[i] && !this.checkWinner(moves)) {
      const value = this.state.chanceFlag ? "X" : "O";
      moves[i] = value;
      this.setState({
        moves: moves,
        chanceFlag: !this.state.chanceFlag
      });
    }
  };
  getBox = i => {
    const moves = this.state.moves;
    return (
      <Box content={moves[i]} onMoveHandler={() => this.onMoveHandler(i)} />
    );
  };
  render() {
    const winner = this.checkWinner(this.state.moves);
    const nextP = this.state.chanceFlag ? "X" : "O";
    let status;
    if (winner) status = `Winner: ${winner}`;
    else status = `Next Player: ${nextP}`;
    return (
      <div className="board">
        <div className="boardHeader">{status}</div>
        <div className="boardRow">
          {this.getBox(0)}
          {this.getBox(1)}
          {this.getBox(2)}
        </div>
        <div className="boardRow">
          {this.getBox(3)}
          {this.getBox(4)}
          {this.getBox(5)}
        </div>
        <div className="boardRow">
          {this.getBox(6)}
          {this.getBox(7)}
          {this.getBox(8)}
        </div>
      </div>
    );
  }
}
export default TikTakBoard;
