import React, { useState } from "react";
// import Card from "./Components/Card";
import Card2 from "./Components/Card2";
import "./App.css";

function App() {
  // const data = ["aman", "deep", "singh", "parihar"];
  const [val, setVal] = useState({ name: "Amandeep", age: 20 });

  return (
    <div>
      {/* <Card></Card> */}
      {/* <Card2></Card2> */}
      <button
        onClick={() => {
          setVal({ ...val, gender: "male" });
          console.log(val);
        }}
        className="btn blue"
      >
        Click
      </button>
    </div>
  );
}

export default App;
