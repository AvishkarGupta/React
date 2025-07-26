import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  function shoot (){
    if (count < 20){
      setCount(count + 1)
      console.log(count = count + 1)

    }
  }
  function dontShoot (){
    if (count > 0){
      setCount(count - 1)
      console.log(count = count - 1)
    }
  }

  return (
    <>
      <h1>Hook and its working {count}</h1>
      <p>counter: {count}</p>
      <br />
      <button onClick={shoot}>Increase count {count}  </button>
      <button onClick={dontShoot}>Decrease count {count}</button>
    </>
  )
}

export default App
