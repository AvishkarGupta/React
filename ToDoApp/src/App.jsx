import './App.css'
import Container from "./components/container"
import AddToDo from './components/AddToDo'
import Header from "./components/Header"
import ToDoList from './components/ToDoList'
import { useState } from 'react'

function App() {

  let [taskList, setTaskList] = useState(["code", "gym", "Crack Google"])
  function addNewTask (event){
    console.log(event)
    if (event.code == "Enter"){
      let newTask = (event.target.value)
      console.log(newTask)
      let newTaskList = [...taskList, newTask]
      setTaskList (newTaskList)
      event.target.value = ""
    }
  }
  
  let [active, setActive] = useState([])
  let changeColor = (task, event)=>{
    console.log(task)
    setTaskList(taskList.filter((word) => word != task));
    if (active.length != 0){
      active.pop(task)
    }
    let newActive = [...active, task]
      setActive(newActive);
  }

  return (
    <>
    <Container>
      <Header/>
      <AddToDo changes={addNewTask} />
      {taskList.map((task)=> <ToDoList key={task} task={task} eventToBePreformed={(event)=> changeColor(task, event)} color={active.includes(task)} />)}
    </Container>
    </>
  )
}

export default App