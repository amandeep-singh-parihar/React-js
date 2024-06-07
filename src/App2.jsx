import React, { useState } from "react";
import Card7 from "./Components/Card 7/Card7";
import Navbar from "./Components/Card 7/Navbar";

function App2() {
  const data = [
    {
      image:
        "https://i.pinimg.com/564x/d9/92/32/d9923234c33089c7c70546c8ef1d1a66.jpg",
      name: "Mocking Bird",
      artist: "Eminam",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/564x/7b/ba/aa/7bbaaa467f47df57801b1c55cac6a68e.jpg",
      name: "Gangsta Paradise",
      artist: "Snoop Dog",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/564x/45/50/66/4550667c6516a17f529f906cd56abf42.jpg",
      name: "Levitating",
      artist: "Dua Lipa",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/736x/f5/03/6f/f5036fd4291a8ec5ae8b77292505814c.jpg",
      name: "Three Nights",
      artist: "Dominic Fike",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/564x/28/d3/f8/28d3f807e8ae9dc3016a32525aab94e9.jpg",
      name: "Heathens",
      artist: "21 Pilots",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/564x/72/45/4d/72454dfdff7873b20d200cb9a5116293.jpg",
      name: "Hips Don't Lie",
      artist: "Shakira",
      added: false,
    },
    {
      image:
        "https://i.pinimg.com/564x/48/e0/bb/48e0bbc6f3b8923813c3fb565f91f208.jpg",
      name: "Runaway",
      artist: "Aurora",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);
  const handleClick = (index) => {
    setSongData((prev)=>{
      return prev.map((item,itemIndex)=>{
        if(itemIndex===index) return {...item,added:!item.added};
        return item;
      })
    })
  };

  return (
    <div className="w-full h-screen bg-zinc-300">
      <Navbar  values={songData} />
      <div className="px-20 flex gap-10 mt-10 flex-wrap">
        {songData.map((item, index) => (
          <Card7 key={index} values={item} handleClick={handleClick} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App2;
