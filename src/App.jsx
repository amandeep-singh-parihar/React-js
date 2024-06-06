import React, { useState } from "react";
// import Card from "./Components/Card/Card";
// import Card2 from "./Components/Card 2/Card2";
// import Card3 from "./Components/Card 3/Card3";
// import Card4 from "./Components/Card 4/Card4";
// import Card5 from "./Components/Card 5/Card5";

// <div>
//   <Card5 text="Know more" color="bg-green-600"/>
//   <Card5 text="Download" color="bg-red-600"/>
// </div>

import Card6 from "./Components/Card 6/Card6";
import "./App.css";

function App() {
  const data = [
    {
      name: "Simran",
      profession: "Singer",
      image:
        "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Astha",
      profession: "Dancer",
      image:
        "https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Sheeal",
      profession: "Artist",
      image:
        "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Vanshika",
      profession: "Bommer",
      image:
        "https://plus.unsplash.com/premium_photo-1689551671548-79ff30459d2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];

  const [realData, setRealData] = useState(data);
  const handleFriendsButton = (cardindex) => {
    setRealData((previous) => {
      return previous.map((item, index) => {
        if (index === cardindex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
      {realData.map((item, index) => (
        <Card6
          key={index}
          index={index}
          handleClick={handleFriendsButton}
          values={item}
        />
      ))}
    </div>
  );
}

export default App;
