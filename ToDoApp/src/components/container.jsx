import styles from "./container.module.css"

function Container(props){
  return<>
  <div className={`${styles.container} w-1/2`}>{props.children}</div>
  </>
}

export default Container;