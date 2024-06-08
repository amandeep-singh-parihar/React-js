import React, { useRef } from "react";
// import Card8 from "./Components/Form Handling/Card8";

function App3() {
  const name = useRef(null);
  const age = useRef(null);
  const email = useRef(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value);
    console.log(age.current.value);
    console.log(email.current.value);

  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <input ref={name} placeholder="name" type="text" className="border border-solid border-blue-600 mr-3" />
      <input ref={age} type="text" placeholder="age" className="border border-solid border-blue-600 mr-3"/>
      <input ref={email} type="text" placeholder="email" className="border border-solid border-blue-600 mr-3"/>
      <input type="submit" className="border border-solid border-blue bg-blue-400 text-white" />
    </form>
  );
}

export default App3;
