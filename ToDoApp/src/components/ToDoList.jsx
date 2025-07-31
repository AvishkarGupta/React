import styles from "./ToDoList.module.css"

const ToDoList = ({task, eventToBePreformed, color})=>{


 return <div  id={task} className={`${styles.todolistDiv} ${color && styles.change}`}>
  <p id={task} className={styles.todoitem}>{task}</p>
  <button id={task} className={styles.todobutton} onClick={eventToBePreformed}>Delete Task</button>
  </div>
}

export default ToDoList;