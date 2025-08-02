import { useRef } from "react"

export function Light (){

  const lightRed = useRef();
  
  const lightYellow = useRef();
  
  const lightGreen = useRef();

  const showColor = ()=>{
    let randomNum = Math.floor(Math.random() *3 + 1)

    if (randomNum == 1){
      lightRed.current.style.backgroundColor = "red"
      lightGreen.current.style.backgroundColor = "black"
      lightYellow.current.style.backgroundColor = "black"
    }else if (randomNum == 2){
      lightYellow.current.style.backgroundColor = "yellow"
      lightRed.current.style.backgroundColor = "black"
      lightGreen.current.style.backgroundColor = "black"
    }else{
      lightGreen.current.style.backgroundColor = "Green"
      lightYellow.current.style.backgroundColor = "black"
      lightRed.current.style.backgroundColor = "black"
    }
  }

  return <>
  <div ref={lightRed} className="light">Red</div>
  <div ref={lightYellow} className="light">Yellow</div>
  <div ref={lightGreen} className="light">Green</div>
  <button onClick={() => showColor()}>Check Signal</button>
  </>
};