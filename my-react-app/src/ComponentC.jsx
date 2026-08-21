import React, { useContext } from "react";
import { UserContext } from "./ComponentA";

function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div>
      <h1>ComponetC</h1>
      <h2>{`Hello again, ${user}`}</h2>
    </div>
  );
}

export default ComponentC;
