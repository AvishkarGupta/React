import { useContext } from 'react'
import './App.css'
import Button from './component/CountButton'
import { ButtonContext } from './context/counter.content'

function App() {

  const method = useContext(ButtonContext)

  const countIncrement = () => {
    method.setCount(method.count == 10 ? method.count : method.count + 1)
  }   
  const countDerecment = () => {
    method.setCount(method.count == 0 ? method.count : method.count - 1)
  }   
  const countReset = () => {
    method.setCount(method.count = 0)
  }

  return (
     <>
     <h1>{method.count} </h1>
     <Button work={countReset} type={method.reset}/>
     <Button work={countDerecment} type={method.remove}/>
     <Button work={countIncrement}  type={method.add}/>
     </>
     
  )
}

export default App
