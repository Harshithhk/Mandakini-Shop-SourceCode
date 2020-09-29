import React from "react";
import "./Item.css";
import lolo from "./lolo.webp";
const Item = (props) => {
  return (
    <div className="Item" style={{ background: props.bgcolor }}>
      <img src={lolo} alt="lolo.webp" />
      <div className="Off">{props.discount}</div>
      <div className="Itemdes">
        <h5>{props.name}</h5>
        <h3>
          ₹{props.selling_price}
          <span>₹220</span>
        </h3>
      </div>
    </div>
  );
};

export default Item;
