import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Vehicles from "./pages/Vehicles";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Vehicles />} />
      </Routes>
    </Router>
  );
};

export default App;

