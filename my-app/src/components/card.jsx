import React from "react";


function Cards(props){
  return(
  <div className="flex flex-col rounded-xl  p-4 w-100 mb-2"
        style={{
          border: '0.88px solid',
          background: ' #de4f4f0d',
        }}
      >
        <div  className="rounded-b-xl py-4 bg-red-200">
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="200"
            height="200"
            className="rounded-xl"
          />
        </div>
        <div className="rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{props.text}</h1>
            <h1 className="font-bold font-RubikBold">Price</h1>
          </div>
          <div className="flex  justify-between font-mono">
            <p>{props.description || "This cars's details has been updated using coventional react props method"} </p>
            <p>{props.price || "Not for sale"}</p>
          </div>
        </div>
      </div>
)}

export default Cards