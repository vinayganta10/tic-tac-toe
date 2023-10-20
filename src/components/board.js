import Square from "./Square";
import './board.css';

function Board(props) {
    let squares = props.squares;
    let reset = props.reset;
    function calculateWinner(sq){
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
            if(sq[a] && sq[a]===sq[b] && sq[b]===sq[c]){
                return sq[a];
            }
        }
        return null;
    }
  function handleClick(i) {
    if(squares[i] || calculateWinner(squares)){
        return;
    }
    const nextSquares = squares.slice();
    if (props.chance === true) {
      nextSquares[i] = "X";
    } 
    else {
      nextSquares[i] = "O";
    }
    props.onPlay(nextSquares);
  }
  let winner = calculateWinner(squares);
  let status="";
  let containsNull = squares.some((element)=>element===null);
  if(containsNull){
    if(winner){
        status="Winner is" + winner;
      }
      else{
        if(props.chance===true){
            status="next move X";
        }
        else{
            status="next move O";
        }
      }
  }
  else{
    status="DRAW click on new game";
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
      <button type="reset" onClick={reset}>New game</button>
    </>
  );
}



export default Board;
