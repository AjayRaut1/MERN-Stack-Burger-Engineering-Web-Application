import React from "react";
import { motion } from "framer-motion";
import burger1 from "../../assets/burger1.png"

const Contact = () => {
  return (
    <section className="contact">
      <motion.form >
        <h2>Contact Us</h2>
        
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Type your Message here ..." id="" cols="30" rows="10"></textarea>
        <button type="submit">Send</button>
      </motion.form>

      {/* extended form css */}
      <motion.div className="formBorder">
        <motion.div>
            <img src={burger1} alt="burger1" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;