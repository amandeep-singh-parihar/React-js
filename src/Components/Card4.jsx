import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Card4.css";

function Card4() {
  const [val, setVal] = useState(false);

  return (
    <div className="container">
      <div className="card">
        <img
          className={`img1 ${val === false ? "tf0" : " tf100"}`}
          src="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`img2 ${val === false ? " tf0" : " tf100"}`}
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span onClick={() => setVal(() => !val)} className={`arrow ${val ? "rotate" : ""}`}>
          <FaArrowRightLong size={"0.8em"} />
        </span>
      </div>
    </div>
  );
}

export default Card4;
