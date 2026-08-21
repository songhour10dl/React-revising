import { useState, createContext, useContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();
function ComponentA() {
  const [user, setUser] = useState("Songhour");
  return (
    <div>
      <h1>{`Hello ${user}`}</h1>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
