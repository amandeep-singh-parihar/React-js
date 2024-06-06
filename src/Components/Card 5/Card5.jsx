import React from "react";
import "./Card5.css";

function Card5({text,color}) {
  return (
    <button className={`px-3 py-1 ${color} text-zinc text-zinc-100 text-xs rounded m-2`}>{text}</button>
  );
}

export default Card5;

//learning for props using
