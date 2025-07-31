import styles from "./Container.module.css"

function Container(props){

  return<>
  <div className={`${styles.divContainer} w-1/3`}>{props.children} </div>
  </>
}

export default Container;