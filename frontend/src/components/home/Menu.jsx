import React from "react";
import MenuCard from "../../components/home/MenuCard.jsx"
import burger1 from "../../assets/burger1.png";

const Menu = ()  => {
    return (
        <section id="menu">
            <h1>MENU</h1>
            <div>
                <MenuCard 
                itemNum = {1}
                burgerImageSrc = {burger1}
                price = {99}
                 title = {"Cheese Burger"}
                />
            </div>
        </section>
    );
}

export default Menu;