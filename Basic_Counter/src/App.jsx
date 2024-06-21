import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
 
  //let counter = 15

  const addValue = () => {
    console.log("clicked",Math.random())
    counter = counter + 1
    setCounter(counter)
  }

  const removevalue = () => {
    if (counter <=0){
      counter = 0
    }
    else{
      counter = counter - 1
    }
    setCounter(counter)
  }

  return (
    <>
    <h1>Simple Counter</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removevalue}>Remove Value {counter}</button>

    </>
  )
}

export default App
