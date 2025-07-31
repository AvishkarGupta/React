
const AddToDo = ({changes}) =>{
    return <>
  <input id="inputVal" type="text" placeholder="Enter your task" className="w-1/2 bg-white rounded border-2 border-pink-600 px-2 py-1" onKeyDown={changes} />
  <button type="submit" id="inputVal" className="float-right align-left text-base rounded border-2 border-white bg-sky-400 text-white font-medium px-2 py-1" >Add Task</button>
  </>
}

export default AddToDo;