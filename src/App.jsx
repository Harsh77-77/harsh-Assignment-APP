import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Screen1 from "./pages/Screen1"; // Update the path to your Screen1 file
import Screen2 from "./pages/Screen2"; // Update the path to your Screen2 file
import Categories from "./pages/Categories";
import Services from "./pages/Services";
import Saved from "./pages/Saved";
import LOgout from "./pages/LOgout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/screen1" element={<Screen1 />} />
        <Route path="/screen2" element={<Screen2 />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/services" element={<Services />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/logout" element={<LOgout />} />
      </Routes>
    </Router>
  );
};

export default App;