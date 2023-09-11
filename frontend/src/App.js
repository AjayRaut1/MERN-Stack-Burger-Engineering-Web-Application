import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home"
import Header from "./components/layouts/Header"
import Contact from "./components/contact/Contact"
import Cart from "./components/cart/Cart"
import Shipping from "./components/cart/Shipping"
import ConfirmOrder from "./components/cart/ConfirmOrder"
import PaymentSuccess from "./components/cart/PaymentSuccess"
import Login from "./components/login/Login"

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/login.scss";

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shipping" element={<Shipping />} />
      <Route path="/confirmorder" element={<ConfirmOrder />} />
      <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    
  </Router>
}

export default App;
