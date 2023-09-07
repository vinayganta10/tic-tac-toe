import React,{useState} from "react";
import './Square.css';

function Square(props){
    const [value,setValue] = useState(null)
    function handleClick(){
        setValue("X");
    }
    return(
        <button className="square" onClick={handleClick}>{value}</button>
    );
}

export default Square;