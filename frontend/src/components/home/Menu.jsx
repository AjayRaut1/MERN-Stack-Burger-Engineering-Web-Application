import React from "react";
import MenuCard from "../../components/home/MenuCard.jsx";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerImageSrc={burger1}
          price={99}
          title={"Veg Cheese Burger"}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={2}
          burgerImageSrc={burger2}
          price={149}
          title={"Jumbo Veg Cheese Burger"}
          handler={addToCartHandler}
        />
        <MenuCard
          itemNum={3}
          burgerImageSrc={burger3}
          price={199}
          title={"Cheese Burger with French Fries"}
          handler={addToCartHandler}
        />
      </div>
    </section>
  );
};

export default Menu;
