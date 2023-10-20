import { useState } from "react";
import Square from "./Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [chance, setChance] = useState(0);
  function reset(){
    setSquares(Array(9).fill(null));
    setChance(0);
  }
  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)){
        return;
    }
    const nextSquares = squares.slice();
    if (chance === 0) {
      nextSquares[i] = "X";
      setChance(1);
    } 
    else {
      nextSquares[i] = "O";
      setChance(0);
    }
    setSquares(nextSquares);
  }
  let winner = calculateWinner(squares);
  let status=""
  if(winner){
    status="Winner is" + winner;
  }
  else{
    if(chance===0){
        status="next move X";
    }
    else{
        status="next move O";
    }
  }
  return (
    <>
        <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button type="reset" onClick={reset}>Reset</button>
    </>
  );
}

function calculateWinner(squares){
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a]===squares[b] && squares[b]===squares[c]){
            return squares[a];
        }
    }
    return null;
}

export default Board;
