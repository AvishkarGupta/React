import styles from "./Display.module.css"


const Display = ({display})=>{

  return <div className={`${styles.display} rounded`}>
    <input value={display} id="input" type="text" className={`${styles.input} mx-auto`} readOnly/>
  </div>
}

export default Display;