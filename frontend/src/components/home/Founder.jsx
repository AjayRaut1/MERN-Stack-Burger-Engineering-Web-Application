import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/founder.jpg";

const Founder = () => {
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
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="" height={250} width={180}/>
        <h3>Founder : Ajay Raut</h3>
        <p>
          Deviyo aur Sajjano, Namaskar to our Engineer's Burger Wala Katta
          <br />A place where you can buy Happiness.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
