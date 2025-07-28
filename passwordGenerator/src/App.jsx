import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")
  const copypass = useRef(null)

  const copyToClipBoard = useCallback(()=>{
    copypass.current?.select();
    copypass.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password)
  }, [password])

  const generator = useCallback( ()=>{
    let pass = "" 
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "1234567890"
    if (char) str += "[]{}()`~!@#$%^&*"
    
    for (let i = 1; i <= length; i++){
      let idx = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(idx)
    }
    setPassword(pass)

  }, [length, setPassword, number, char])

  useEffect(()=>{generator()}, [length, number, char, generator])
  return (
    <>
    {/* <button className='bg-blue-700 text-orange-500 p-2 rounded' onClick={()=> generator()}>click me</button> */}
      <div className="mx-auto my-10 bg-gray-700 w-200 h-40 rounded">
        <div className=''>
          <input id="1" type="text" value={password} placeholder='password'className='h-8 w-100 rounded bg-gray-50 my-5 mx-5' readOnly ref={copypass}/>
          <button onClick={()=> copyToClipBoard()} className='text-white bg-black px-3 py-1 rounded'>Copy</button>
        </div>
        <div className='flex '>
          <div className='flex mx-3'>
            <input id="2" type="range" min="6" max="100" value={length} className="my-7 mx-2 w-64 h-2 bg-blue-200 rounded-lg cursor-pointer" onChange={(e)=> setLength(e.target.value)}></input>
            <label className="my-5 inputtext text-orange-500 text-lg" >Input {length} </label>
          </div>
          <div className='flex mx-3'>
            <input id="3" type="checkbox" value={number} className='flex mx-2' defaultChecked={number} onClick={()=> setNumber((number)=> !number)}></input>
            <p className="my-5 inputtext text-orange-500  text-lg">Number</p>
          </div>
          <div className='flex mx-3'>
            <input id="4" type="checkbox" value={char} className='flex mx-2' defaultChecked={char} onClick={()=> setChar((char)=> !char)}></input>
            <p className="my-5 inputtext text-orange-500  text-lg">Character</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
