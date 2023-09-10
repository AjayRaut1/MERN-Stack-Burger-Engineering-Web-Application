import React from "react";

const MenuCard = ({ itemNum, burgerImageSrc, price, title, handler}) => {
  return (
    <div>
      <div>Item {itemNum}</div>
      <menu>
        <img src={burgerImageSrc} alt={itemNum} />

        <h5>₹ {price}</h5>

        <p>{title}</p>

        <button onClick={() => handler(itemNum)}>Buy Now</button>
      </menu>
    </div>
  );
};

export default MenuCard;
