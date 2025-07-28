import { useState } from 'react'
import './App.css'
import Navbar from './Component/navbar'

function App() {
 const [color, setColor] = useState("black")

  return (
    <>
      
      <div style={{backgroundColor : color}} className='w-auto h-screen'>
        <Navbar />
        <div id="main" className="fixed bottom-10 mx-10 p-5 bg-sky-200 w-auto h-20 rounded-xl">
          <button onClick={() => setColor("red")} id="btn" className="mx-10 bg-red-400 w-20 h-10 rounded-xl">red</button>

          <button onClick={() => setColor("blue")} id="btn" className="mx-10 bg-sky-700 w-20 h-10 rounded-xl">blue</button>

          <button onClick={() => setColor("green")} id="btn" className="mx-10 bg-green-400 w-20 h-10 rounded-xl">green</button>

          <button onClick={() => setColor("yellow")} id="btn" className="mx-10 bg-yellow-400 w-20 h-10 rounded-xl">yellow</button>

          <button onClick={() => setColor("pink")} id="btn" className="mx-10 bg-pink-400 w-20 h-10 rounded-xl">pink</button>

          <button onClick={() => setColor("lavender")} id="btn" className="mx-10 bg-violet-400  w-20 h-10 rounded-xl">lavender</button>
        </div>
       </div>
    </>
  )
}

export default App
