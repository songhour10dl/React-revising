function Button() {
  const handleClick = (e) => {
    e.target.textContent = "dam";
  };
  return (
    <>
      <button onClick={(e) => handleClick(e)}>Click me 🥹</button>
    </>
  );
}
export default Button;
