import React, { useState } from "react";
import "./Card3.css";

function Card3() {

    const [val,setVal]=useState(false);


    return (
        <div>
            <h1>
                {val===false ? "BAHAR JAAO" : "MAT JAO"}
            </h1>

            <button onClick={()=>setVal(()=>!val)} className="btn">change</button>
        </div>
    )
} 

export default Card3;
