const AddToDo = ({task}) => {

  return <>
      <div className="flex bg-sky-200 p-2 rounded m-2">
        <input placeholder="Enter your to do" type="text" className="border-solid border-2 text-black bg-white mx-7 rounded px-3" />
        <input type="date" className="text-black bg-white mx-7 border-solid border-2 rounded"/>
        <button className="mx-7 bg-black" >Add Task</button>

      </div>
  </>
}

export default AddToDo;