import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Components/pages/Home ";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Navbar from "./Components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Components/pages/NotFound";
import AddUsers from "./Components/users/AddUsers";
import EditUsers from "./Components/users/EditUsers";
import User from "./Components/users/User";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users/add" element={<AddUsers />} />
          <Route path="/users/edit/:id" element={<EditUsers />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
