import React from "react";
import "../../styles/home.scss";

const Home = () => {
  return (
    <section className="home">
      <div>
        <h1>Bachelor's Burger</h1>
        <p>Money Can't buy Happiness <br />
          But you can buy Burgers</p>
      </div>

      <a href="#menu">Explore Menu</a>
    </section>
  );
};

export default Home;