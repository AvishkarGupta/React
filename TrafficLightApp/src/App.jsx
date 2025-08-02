import { useState } from 'react'
import './App.css'
import { Light } from './components/Light'
import { MessageBox } from './components/MessageBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Traffic Light</h1>
        <Light/>
      <MessageBox/>
    </>
  )
}

export default App
