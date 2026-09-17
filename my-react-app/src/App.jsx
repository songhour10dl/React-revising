import { useState, useRef, useEffect } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const previousState = useRef("");
  useEffect(() => {
    previousState.current = inputValue;
  }, [inputValue]);
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h2>Current value : {inputValue}</h2>
      <h2>Previous value : {previousState.current}</h2>
    </>
  );
}

export default App;
