import React from "react";
import Card from "./Components/Card";

function App() {
  const data = ["aman", "deep", "singh", "parihar"];

  return (
    <div>
      {data.map(() => {
        return <h1>hey</h1>;
      })}
    </div>
  );
}

export default App;
