import React from "react";
import { delay, motion } from "framer-motion";
import Founder from "./Founder";

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...options}>Bachelor's Burger</motion.h1>
          <motion.p {...options} transition={{ delay: 0.2 }}>
            Money Can't buy Happiness <br />
            But you can buy Burgers
          </motion.p>
        </div>

        <motion.a
          initial={{
            y: "-100%",
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
          }}
          href="#menu"
        >
          Explore Menu
        </motion.a>
      </section>

      <Founder />
    </>
  );
};

export default Home;
