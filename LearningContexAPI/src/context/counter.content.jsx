import { createContext, useState } from "react";

export const ButtonContext = createContext()

function ButtonContextProvider (props){

  const [count, setCount] = useState(0)
  let add = "Add Item"
  let remove = "Remove item"
  let reset = "RestValue"

  return(
    <ButtonContext.Provider value={{count, setCount, add, remove, reset }}>
      {props.children}
    </ButtonContext.Provider>
  )
}

export default ButtonContextProvider;

