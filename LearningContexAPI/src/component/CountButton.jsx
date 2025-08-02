import { useContext } from "react";
import {ButtonContext} from "../context/counter.content";


const Button = ({work, type}) => {
  const state = useContext(ButtonContext)
  return(
    <>
      <button onClick={() => work()}>{type} </button>
    </>
  )
}


export default Button;