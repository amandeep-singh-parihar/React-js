import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Card4.css";

function Card4() {
  return (
    <div className="container">
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span className="arrow">
          <FaArrowRightLong size={"0.8em"} />
        </span>
      </div>
    </div>
  );
}

export default Card4;
