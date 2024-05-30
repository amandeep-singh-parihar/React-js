import React, { useState } from "react";
// import Card from "./Components/Card";
import Card2 from "./Components/Card2";
import "./App.css";

function App() {
  // const data = ["aman", "deep", "singh", "parihar"];
  const [val, setVal] = useState({ name: "Amandeep", isBanned: false });

  return (
    <div>
      {/* <Card></Card> */}
      {/* <Card2></Card2> */}
      <h1>Name : {val.name}</h1>
      <h1>Banned : {val.isBanned.toString()}</h1>
      <button
        className={`${
          val.isBanned ? "btn blue" : "btn red"}`}
        onClick={() => setVal({ ...val, isBanned: !val.isBanned })}>
        Click
      </button>
    </div>
  );
}

export default App;
 