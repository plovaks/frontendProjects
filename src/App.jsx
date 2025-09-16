import Die from "../components/Die"
import { useState, useEffect, useRef } from "react";
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'
export default function App(){

  const [dice, setDice] = useState(() => generateAllNewDice());
const gameWon = dice.every(die => die.isHeld) && 
        dice.every(die => die.value === dice[0].value);

const buttonRef = useRef(null);
useEffect(() => {
  if(gameWon){
    buttonRef.current.focus();
  }
}, [gameWon])



  function generateAllNewDice (){
  const len = 10;
  return  [...new Array(len)].map(() => ( {
    value: Math.ceil(Math.random() * 6),
    isHeld:false,
    id:nanoid(),
  }));
  
}


  const diceElements = dice.map(dieObj => (
  <Die 
      key = {dieObj.id} 
      value = {dieObj.value} 
      isHeld ={dieObj.isHeld} 
      hold={() => hold(dieObj.id)}
      id={dieObj.id}
      /> 
  ))
  

  function rollDice(){
    gameWon === false ? 
    (setDice(oldDice => {
      return oldDice.map(die => {
        return die.isHeld  ? die : {...die, value:Math.ceil(Math.random() * 6) } 
      })
    })) : 
    setDice(generateAllNewDice());
  }


 function hold (id){
  setDice(oldDice => {
    return oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    })
  })
   
  }
  return(
    <main >
      <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
            {diceElements}
      </div>
      <button ref={buttonRef} onClick={rollDice}>{gameWon ? 'New game' : 'Roll'}</button>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
            {
              gameWon && <p>Congratulations!You won! Press "New Game" to start again. </p>
            }
      </div>
      
    </main>
  )
}