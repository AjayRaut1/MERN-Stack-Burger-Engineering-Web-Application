import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/app.scss";
import "./styles/header.scss";
import Home from "./components/home/Home"
import Header from "./components/layouts/Header"

function App() {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    
  </Router>
}

export default App;
