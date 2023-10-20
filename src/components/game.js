import { useState } from "react";
import Board from "./board";

function Game() {
    const [chance,setChance] = useState(true);
    const [history,setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    function reset(){
        setHistory([Array(9).fill(null)]);
        setChance(true);
    }
    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length-1);
        setChance(!chance);
    }
    function jumpTo(move){
        setCurrentMove(move);
        setChance(move%2===0);
    }
    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'Go to game start';
        }
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });
    
      return (
    <div className="game">
      <div className="game-board">
        <Board chance={chance} squares={currentSquares} onPlay={handlePlay} reset={reset}/>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
