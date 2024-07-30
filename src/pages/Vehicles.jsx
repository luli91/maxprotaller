import React from 'react';
import VehicleTable from '../components/VehicleTable';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Vehicles = ({ searchTerm }) => {

    const navigate = useNavigate(); 

  const handleAddVehicleClick = () => {
    navigate("/NewVehicle");
  };

  return (
    <div>
      <h1 className="mb-4">Lista de Vehículos</h1>
      <Button variant="primary" onClick={handleAddVehicleClick}
      >
        + Auto
      </Button>
      <VehicleTable searchTerm={searchTerm} />
    </div>
  );
};

export default Vehicles;
