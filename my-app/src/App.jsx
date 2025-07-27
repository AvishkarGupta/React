import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/card.jsx'
import Card_2 from './components/Card_2.jsx'

function App() {
  const [count, setCount] = useState(0)
let name = "Avishkar"
  return (
    <>
      <h1 className="text-[50px] bg-green-400 mb-4 rounded-xl">Avishkar</h1>
    <Cards photo="./assets/react.svg" text="Avishkar"/>
    <Cards/>
    <Card_2 userName={name} description="Hey I'm a MERN stack developer at Google"/>
    </>
  )
}

export default App
