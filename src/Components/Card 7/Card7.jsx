import React from "react";

function Card7({ values,handleClick,index}) {
  const { image, name, artist, added } = values;

  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex gap-4 pb-8 relative mt-20">
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img className="h-full w-full object-cover object-[0%_20%]" src={image} alt="" />
      </div>
      <div className="">
        <h3 className="text-base font-semibold leading-none">{name}</h3>
        <h6 className="text-sm font-medium">{artist}</h6>
      </div>
      <button onClick={()=>handleClick(index)} className={`px-4 py-3  ${added===false ? "bg-orange-600" : "bg-[#7dbcba]"} absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full whitespace-nowrap`}>
        {added===false ? "Add To Favourites":"Added"}
      </button>
    </div>
  );
}

export default Card7;