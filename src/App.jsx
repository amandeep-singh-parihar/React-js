import React, { useState } from "react";
// import Card from "./Components/Card";
import Card2 from "./Components/Card2";
import "./App.css";

function App() {
  // const data = ["aman", "deep", "singh", "parihar"];
  // const [val, setVal] = useState({ name: "Amandeep", age: 20 });
  const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div>
      {/* <Card></Card> */}
      {/* <Card2></Card2> */}
      {val.map((item) => (<h1>{item}</h1>))}
      <button onClick={() => {setVal(() => val.filter((item, index) => index != val.length - 1));}} className="btn blue"> Click </button>
    </div>
  );
}

export default App;
