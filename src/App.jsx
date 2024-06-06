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
      profession: "Painter",
      image:
        "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Astha",
      profession: "Dancer",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Neelam",
      profession: "Singer",
      image:
        "https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Khushi",
      profession: "Engineering",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Sheetal",
      profession: "Artist",
      image:
        "https://plus.unsplash.com/premium_photo-1689551671548-79ff30459d2a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
    {
      name: "Vanshika",
      profession: "Business",
      image:
        "https://images.unsplash.com/photo-1500336624523-d727130c3328?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      friends: false,
    },
  ];

  const [realData, setRealData] = useState(data);
  //state jaha banti hai wahi modify ke ja sakti hai
  const handleFriendsButton = (idx) => {
    setRealData((prev) => {
      return prev.map((item, index) => {
        if (index === idx) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-3 items-center justify-center">
        {realData.map((item, index) => (
          <Card6
            key={index}
            idx={index}
            handleClick={handleFriendsButton}
            values={item}
          />
          //sending all the items using values and defined the value in the card6 itself
        ))}
      </div> 
    </>
  );
}

export default App;
