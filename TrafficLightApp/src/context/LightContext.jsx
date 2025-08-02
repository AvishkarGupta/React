import { createContext } from "react";

export const lightContext = createContext();

export const LightProvider = (props) => {

  

  return<>
  {props.children}
  </>
}