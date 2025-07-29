const ListItem = ({item = ["avishkar", "gupta", "prachi", "singh"]}) =>{
  
  return (
    <>
      <ul>
       {item.map((i) => <li className="bg-gray-400 my-2 rounded py-0.5 text-xl text-orange-600" key={i}>{i} </li>)} 
      </ul>
    </>
  )
}

export default ListItem;