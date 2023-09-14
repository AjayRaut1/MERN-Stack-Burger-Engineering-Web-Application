import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home"
import Header from "./components/layouts/Header"
import Contact from "./components/contact/Contact"
import Cart from "./components/cart/Cart"
import Shipping from "./components/cart/Shipping"
import ConfirmOrder from "./components/cart/ConfirmOrder"
import PaymentSuccess from "./components/cart/PaymentSuccess"
import Login from "./components/login/Login"
import Profile from "./components/profile/Profile"
import MyOrders from "./components/myOrders/MyOrders"
import OrderDetails from "./components/myOrders/OrderDetails"
import DashBoard from "./components/admin/DashBoard"
import Users from "./components/admin/Users"
import Orders from "./components/admin/Orders"
import About from "./components/about/About"

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
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";

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
      <Route path="/me" element={<Profile />} />
      <Route path="/myorders" element={<MyOrders />} />
      <Route path="/order/:id" element={<OrderDetails />} />
      <Route path="/admin/dashboard" element={<DashBoard />} />
      <Route path="/admin/users" element={<Users />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/about" element={<About />} />
    </Routes>
    
  </Router>
}

export default App;
