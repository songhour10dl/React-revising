import React, { use, useState } from "react";
function MyComponents() {
  const [car, setCars] = useState([]);
  const [carYear, setCarYear] = useState(0);
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };

    setCars((c) => [...c, newCar]);

    setCarYear(2026);
    setCarMake("");
    setCarModel("");
  }
  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }
  function handelYearChange(event) {
    setCarYear(event.target.value);
  }
  function handelMakeChange(event) {
    setCarMake(event.target.value);
  }
  function handelModelChange(event) {
    setCarModel(event.target.value);
  }
  return (
    <div>
      <h1>List of Car Objects</h1>
      <ul>
        {car.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handelYearChange} /> <br />
      <input type="text" value={carMake} onChange={handelMakeChange} />
      <br />
      <input type="text" value={carModel} onChange={handelModelChange} />
      <br />
      <button onClick={handleAddCar}>Add car</button>
    </div>
  );
}

export default MyComponents;
