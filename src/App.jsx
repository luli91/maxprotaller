import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import MyNavbar from './components/Navbar';
import Budgets from "./pages/Budgets";
import Vehicles from "./pages/Vehicles";
import NewVehicle from "./pages/NewVehicle";
import Clients from "./pages/Clients";
import NewClient from "./pages/NewClient";
import TaskCalendar from "./pages/Calendar";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Route path="/Budgets" element={<Budgets/>} />
        <Route path="/Calendar" element={<TaskCalendar />} />
      </Routes>
      <ToastContainer />
    </Router>
  );
};

export default App;

