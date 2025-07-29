const NotList = ({item}) =>{
  return <>
  { item.length == 0 && <h3 className="bg-gray-500 my-2 rounded py-0.5 text-xl text-orange-600">I'm hungry</h3> }
  </>
};

export default NotList;