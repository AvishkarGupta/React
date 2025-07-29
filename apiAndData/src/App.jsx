import ListItem from './components/ListItem'
import NotList from './components/NotList'
import './App.css'
import AddToDo from './components/AddToDo'
import Task from './components/Task'

function App() {

  const url = "https://api.github.com/users/avishkargupta"

  let arr = ["sabji", "dal", "rice" ]
  // let items = arr.map((item) => item)
  let arr1 = "Avishkar"
  let todolist = [{
    name : "gym",
    time : "08-07-2025"
  }, {
    name : "code",
    time : "29-07-2025"
  },{
    name : "Crack Google",
    time : "31-12-2025"
  } ]
  return (
    <>
      <h1>Calling API</h1>
        <NotList item={arr}/>
        <ListItem item={arr}/>
      <h1>To do App</h1>
        <AddToDo/>
        <Task todolist={todolist} />
    </>
  )
}

export default App
