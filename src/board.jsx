import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Player from "./player"
function Board() {
const[turn , setTurn]=useState("");
const [winner, setWinner]=useState("")
const [arr,setArr]=useState(["","","","","","","","",""])


const fillTheBox=(el,index)=>{

  if(arr[index]==="" && winner==="")
  {
      const current = turn === "0" ? "X" : "0";
      let newArr=[...arr]
      newArr[index]=current;
      setArr(newArr)
      setTurn(turn ==="0"? "X": "0")
  }

}

const checkRow=()=>{
  let flag=false;
  for(let i=0;i<9;i+=3)
  {
     if(arr[i]===arr[i+1] && arr[i]===arr[i+2] && arr[i]!="")
     {
        flag=true
     }
  }
  return flag
}
const checkCol=()=>{
  let flag=false;
  for(let i=0;i<3;i++)
  {
     if(arr[i]===arr[i+3] && arr[i]===arr[i+6] && arr[i]!="")
     {
        flag=true
     }
  }
  return flag
 }

 const checkDiagonal=()=>{
  return ((arr[0]=== arr[4] && arr[0]===arr[8] && arr[0]!="") || (arr[2]===arr[4] && arr[2]===arr[6]&& arr[2]!=""))
 }

 const checkForNonEmpty=()=>{
  let count=0;
  arr.map((el,index)=>{
    if(arr[index]!=="")
    {
      count++;
    }
  })
  return count===9
 }



useEffect(()=>{

 if(checkRow() || checkCol() || checkDiagonal())
 {
    if(turn==="0")
    {
      setWinner("First palyer 0 is winner")
    }
    else
    {
      setWinner("Second palyer X is winner")
    }
 }
 else if(checkForNonEmpty())
 {
  setWinner("No one is winner")
 }
},[arr])

const resetTheBoard=()=>{
    setArr(["","","","","","","","",""])
    setWinner("")
}

  return <div>
    <div className="board">
    {arr.map((el,index)=>{
      return <div className="eachBox" key={index} onClick={()=>fillTheBox(el,index)}>{el}</div>
    })}
  </div>
  <button class="btn btn-success" style={{marginTop:"10px"}} onClick={()=>resetTheBoard()}>Reset</button>
  <Player winner={winner} turn={turn}/>
  </div>
}

export default Board;
