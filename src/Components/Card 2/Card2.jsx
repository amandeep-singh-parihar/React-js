import React from "react";
import "./Card2.css";

function Card2(){

    const data=[
        {name:"3 Nights",artist:"Dominic Fike"},
        {name:"Mocking Bird",artist:"Eminam"},
        {name:"Gangsta Pradise",artist:"Snoop Dog"},
        {name:"Levetating",artist:"Dua Lipa"},
        {name:"One Dance",artist:"Drake"},
        {name:"I want you know",artist:"Selena Gomez"},
    ]

    const downFunction=()=>{alert('Downloading...')};

    return (
        <div className="container">
            {data.map((item,index)=>(
                <div key={index} className="card">
                <h1>{item.name}</h1>
                <p>{item.artist}</p>
                <button onClick={downFunction}>Download</button>
            </div>
            ))}
        </div>
    )
}

export default Card2;