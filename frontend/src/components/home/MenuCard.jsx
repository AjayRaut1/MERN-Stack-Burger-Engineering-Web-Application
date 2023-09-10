import React from "react";

const MenuCard = ({ itemNum, burgerImageSrc, price, title, handler }) => {
  return (
    <div className="menuCard">
      <div>Item {itemNum}</div>
      <main>
        <img src={burgerImageSrc} alt={itemNum} />

        <h5>₹ {price}</h5>

        <p>{title}</p>

        <button onClick={() => handler(itemNum)}>Buy Now</button>
      </main>
    </div>
  );
};

export default MenuCard;
