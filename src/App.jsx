import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Planets } from "./components/Planets";
import PlanetDetails from "./components/PlanetDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Planets />}></Route>
        <Route path="/details" element={<PlanetDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
