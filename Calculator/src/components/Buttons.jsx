import styles from "./Buttons.module.css"

function Buttons ({text, buttonMethod}){
  return <div className={`${styles.Buttons} rounded justify-around p-1`}>
    {text.map((number) => 
    <button id={number} key={number} className={`${styles.button} h-25 2xl:shadow-2xl`} onClick={buttonMethod} >{number}</button>)}
  </div>
}

export default Buttons;