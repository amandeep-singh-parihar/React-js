import React from "react";
import "./Card.css";

function Card() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1624521793559-136bfe16fc86?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Amazon Basics",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam ",
      instock: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Daily Objects",
      description:
        "headphones ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam ",
      instock: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Clock",
      description:
        "clock ipsum dolor sit amet consectetur adipisicing elit. Totam aliquam ",
      instock: false,
    },
  ];

  return (
    <div className="container">
      {data.map((elem, index) => (
        <div key={index} className="card">
          <div className="img-div">
            <img src={elem.image} alt="" />
          </div>
          <div className="text">
            <h2>{elem.name}</h2>
            <p>{elem.description}</p>
            <button className="btn">
              {elem.instock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
