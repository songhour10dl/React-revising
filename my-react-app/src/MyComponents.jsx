import React, { useState } from "react";
function MyComponents() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }
  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }
  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <>
      <div>
        <input value={name} onChange={handleNameChange} type="text" />
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number" />
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange}></textarea>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an Option</option>
          <option value="Visa">Visa</option>
          <option value="Master">Master</option>
          <option value="GiftCard">GiftCard</option>
        </select>
        <p>Pyament: {payment}</p>
      </div>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        PickUp
      </label>
      <label>
        <br></br>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>

      <p>Shipping :{shipping}</p>
    </>
  );
}

export default MyComponents;
