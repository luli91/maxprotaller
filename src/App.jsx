import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Vehicles from "./pages/Vehicles";
import Home from "./components/Home";
import MyNavbar from './components/Navbar'
import NewVehicle from "./pages/NewVehicle";
import Clients from "./pages/Clients";
import NewClient from "./pages/NewClient";

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/NewVehicle" element={<NewVehicle />} />
        <Route path="/Clients" element={<Clients />} />
        <Route path="/NewClient" element={<NewClient />} />
      </Routes>
    </Router>
  );
};

export default App;

