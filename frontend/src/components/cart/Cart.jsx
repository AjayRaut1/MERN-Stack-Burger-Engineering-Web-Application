import React from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ title, img, value, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="burger" />
    </div>

    <div>
      <button onClick={increment}>+</button>
      <input type="number" readOnly value={value} />
      <button onClick={decrement}>-</button>
    </div>
  </div>
);

const Cart = () => {
  const increment = (item) => {};
  const decrement = (item) => {};

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"VEG CHEESE BURGER"}
          img={burger1}
          value={1}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"JUMBO VEG CHEESE BURGER"}
          img={burger2}
          value={2}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"CHEESE BURGER WITH FRENCH FRIES"}
          img={burger3}
          value={3}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{2000 + 2000 * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
