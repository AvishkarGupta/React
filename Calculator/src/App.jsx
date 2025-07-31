import { useState } from 'react'
import './App.css'
import Container from './components/Container'
import Display from './components/Display'
import Buttons from './components/Buttons'


// let total = 0
function App() {
  let numberList = ["=", "%", "Del", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", "."]
  let [displayVal, setDisplayVal] = useState("")

  // let str = null
  let buttonVal = (e)=>{
    if (e.target.id === "Del"){
      console.log("avishkar")
      setDisplayVal("")  
    }else if (e.target.id === "="){
      let total = eval(displayVal)
      setDisplayVal(total)
    }else{
      let str = displayVal + e.target.id
     setDisplayVal(str)
    }
  }  
  return (
    <>
     <Container>
      <Display display={displayVal}/>
      <Buttons text={numberList} buttonMethod={buttonVal}/>
     </Container>
    </>
  )
}

export default App;