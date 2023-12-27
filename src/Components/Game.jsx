import { useState } from "react";
import Square from "./Square";
const Game = () => {
    const [isXTurn,setisXTurn]=useState(true)
    const [state,setState]=useState(Array(9).fill(null))

    
    const handleClick = (index) =>{
    if(state[index]!=null){return}
    const copyState=[...state]
    copyState[index]=isXTurn? "X":"O";
    setState(copyState)
    setisXTurn(!isXTurn)
    console.log(copyState)
    }
    //Winner Check
    const checkWinner=()=>{
       
        const Logic=[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]]

      for (let logic of Logic) {
        const [a, b, c] = logic;
        if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
          return state[a];
        }
      }
  
      return false;
    };
    
    const handleReset = () => {
      setState(Array(9).fill(null));
    };
  
    const isWinner=checkWinner()


    return (
        <div className="bg-purple-200 p-10 flex wrap justify-center flex-row">
            {isWinner?(<>
           <p className="flex m-5 font-bold font-mono ">  Yeah {isWinner} Won!</p>
            <button onClick={()=>{handleReset()}}  className="m-2 bg-purple-900 rounded-md p-3 text-white font-bold font-mono">Replay Now</button>
            </> ):<>
      <div className="flex flex-col">
       <Square onClick={()=> handleClick(0)} value={state[0]} />
       <Square onClick={()=> handleClick(1)} value={state[1]}/>
       <Square onClick={()=> handleClick(2)} value={state[2]}/>
      </div>
      <div className="flex flex-col">
      <Square onClick={()=> handleClick(3)} value={state[3]} />
      <Square onClick={()=> handleClick(4)} value={state[4]}/>
      <Square onClick={()=> handleClick(5)} value={state[5]}/>
      </div>
      <div className="flex flex-col">
      <Square onClick={()=> handleClick(6)}  value={state[6]}/>
      <Square onClick={()=> handleClick(7)} value={state[7]}/>
      <Square onClick={()=> handleClick(8)} value={state[8]}/>
        </div>
        <div className="flex flex-col align-center justify-center"><button onClick={()=>{handleReset()}}  className="w-10 text-white font-bold rounded-md p-2 m-3 bg-purple-800">↻</button></div>
 </>}
      </div>
       
 );
    };

export default Game;