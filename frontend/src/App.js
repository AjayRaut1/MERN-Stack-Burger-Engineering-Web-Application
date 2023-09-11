import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home"
import Header from "./components/layouts/Header"
import Contact from "./components/contact/Contact"

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    
  </Router>
}

export default App;
