const Task = ({todolist}) => {

  return <>
        {todolist.map((item) => (
        <div key={item.name} className="flex justify-around bg-pink-200 p-2 rounded m-2">
          <h5 className="w-1/3 text-2xl text-black font-bold mt-2">{item.name} </h5>
          <h5 className="w-1/3 text-xl text-black font-bold text mt-2">{item.time} </h5>
          <button className="mx-7 relative r-3 bg-red-500">Delete</button>
          </div>
        ))}
  </>
}

export default Task;