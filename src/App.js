import React, { useState } from "react";
import './App.css';

// function Button(props){
// return(<button> kazi</button>)

function Button(props) {
const handleClick=()=> {
  props.onClickHandler (props.increment)
}

  return (

   
      <button onClick={ handleClick}>+{props.increment}        </button>
   
  )
}

function Display(props) {
  return (
    <div>
      {props.message}
    </div>
  )
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = (incrementValue) => {
    console.log("counter", counter);
    setCounter(counter + incrementValue);
  }



  return (
    <div>
      <Button onClickHandler={incrementCounter} increment={1}></Button>
      <Button onClickHandler={incrementCounter} increment={5}></Button>
      <Button onClickHandler={incrementCounter} increment={10}></Button>
      <Button onClickHandler={incrementCounter} increment={15}></Button>
      <Display message={counter}></Display>
    </div>
  );
}

export default App;
