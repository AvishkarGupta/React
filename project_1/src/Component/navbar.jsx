import React from "react";
import { useState } from 'react'

function Navbar(){
  // let color = document.querySelector("#main")
   const [color, setColor] = useState("bg-sky-200")
  return(
  <>  
    <div style={{backgroundColor : color}} id="main" className="mx-10  p-5 bg-sky-200 w-auto h-20 rounded-xl display: flex">
      <button onClick={() => setColor("red")} id="btn" className="m-auto bg-red-400 w-20 h-10 rounded-xl">red</button>

      <button onClick={() => setColor("blue")} id="btn" className="m-auto bg-sky-700 w-20 h-10 rounded-xl">blue</button>

      <button onClick={() => setColor("green")} id="btn" className="m-auto bg-green-400 w-20 h-10 rounded-xl">green</button>

      <button onClick={() => setColor("yellow")} id="btn" className="m-auto bg-yellow-400 w-20 h-10 rounded-xl">yellow</button>

      <button onClick={() => setColor("pink")} id="btn" className="m-auto bg-pink-400 w-20 h-10 rounded-xl">pink</button>

      <button onClick={() => setColor("lavender")} id="btn" className="m-auto bg-violet-400  w-20 h-10 rounded-xl">lavender</button>
    </div>
  </>
  )
  
}

export default  Navbar