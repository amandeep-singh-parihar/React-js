import React from "react";
import "./Card6.css";

function Card6({ values, handleClick, idx }) {
  const { name, image, profession, friends } = values;
  //this shows what we needed from the values here we are taking name,image,profession from the values
  return (
    <div className="w-52 bg-white rounded-md overflow-hidden">
      <div className="w-full h-48 bg-sky-200">
        <img
          className="w-full h-full object-cover object-[0%_30%]"
          src={image}
          alt=""
        />
      </div>
      <div className="w-full p-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs">{profession}</h5>
        <button
          onClick={() => handleClick(idx)}
          className={`mt-4 px-3 py-1 text-xs text-white ${
            friends ? "bg-green-500" : "bg-blue-500"
          } rounded-md`}
        >
          {friends === true ? "Friends" : "Add Friends"}
        </button>
      </div>
    </div>
  );
}

export default Card6;
