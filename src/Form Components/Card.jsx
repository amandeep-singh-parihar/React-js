import React from "react";

function Card({user,handleRemove,id}) {
  return (
    <div>
      <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
        <div className="image w-14 h-14 rounded-full bg-zinc-200 overflow-hidden">
          <img className="h-full w-full object-cover object-[0%_10%]" src={user.image} alt="" />
        </div>
        <h1 className="mt-1 text-xl font-semibold ">{user.name}</h1>
        <h4 className="opacity-60 text-xs font-semibold">{user.email}</h4>
        <p className="mt-1 text-center text-xs font-semibold leading-1 tracking-tight">
          ipsum, dolor sit amet consectetur adipisicing elit. Libero, distinctio
          animi! Nulla! istinctio animi! Nulla!
        </p>
        <button onClick={()=>handleRemove(id)} className="px-3 py-1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4">
          Remove It
        </button>
      </div>
    </div>
  );
}

export default Card;
