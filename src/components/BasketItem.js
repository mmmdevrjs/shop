import React from "react";

export default function BasketItem(props) {
  const { id, name, price, quantity } = props;
  return (
    <li className="collection-item">
      <b>
        <span>name:</span>
      </b>
      {name}
      <br />
      <b>
        <span>numbers of products:</span>
      </b>{" "}
      x{quantity}
      <br />
      <b>
        <span>price:</span>
      </b>{" "}
      {price * quantity}${/* {name} x{quantity} = {price} */}
      <span className="secondary-content">
        <i
          className="material-icons delete"
          onClick={() => props.removeFromBasket(id)}
        >
          delete
        </i>
      </span>
    </li>
  );
}
