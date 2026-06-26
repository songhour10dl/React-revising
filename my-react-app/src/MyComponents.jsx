import React, { useState } from "react";
function MyComponents() {
  const [name, damm] = useState("Guest"); // Guest = setting the initial state
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);
  const updateName = () => {
    damm("SpongBob");
  };
  const incrementAge = () => {
    setAge(age + 1);
  };
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };
  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment age</button>
        <p>is Employed: {isEmployed ? "YES" : "NO"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
      </div>
    </>
  );
}

export default MyComponents;
