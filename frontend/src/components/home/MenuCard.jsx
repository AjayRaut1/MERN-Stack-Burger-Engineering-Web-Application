import react from "react";

const MenuCard = ({ itemNum, burgerImageSrc, price, title }) => {
  return (
    <div>
      <div>Item {itemNum}</div>
      <menu>
        <img src={burgerImageSrc} alt={itemNum} />

        <h5>₹ {price}</h5>

        <p>{title}</p>
      </menu>
    </div>
  );
};

export default MenuCard;
