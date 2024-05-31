import React, { useState } from "react";
// import Card from "./Components/Card";
import Card2 from "./Components/Card2";
import "./App.css";

function App() {
  // const data = ["aman", "deep", "singh", "parihar"];
  // const [val, setVal] = useState({ name: "Amandeep", age: 20 });
  // const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  const [val, setVal] = useState([
    { name: "Amandeep", age: 20 },
    { name: "Abhay", age: 21 },
    { name: "Nitin", age: 22 },
  ]);

  return (
    <div>
      {/* <Card></Card> */}
      {/* <Card2></Card2> */}
      {val.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h1>{item.age}</h1>
        </div>
      ))}
      <button
        onClick={() =>
          setVal(() =>
            val.map((item) =>
              item.name === "Abhay" ? { name: "Abhay", age: 100 } : item
            )
          )
        }
        className="btn blue"
      > click </button>
    </div>
  );
}

export default App;
