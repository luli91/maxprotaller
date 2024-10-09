import React from 'react';
import ClientTable from '../components/ClientTable';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Clients = ({ searchTerm }) => {

    const navigate = useNavigate(); 

  const handleAddVehicleClick = () => {
    navigate("/NewClient");
  };

  return (
    <div>
      <h1 className="mb-4">Lista de Clientes</h1>
      <Button variant="warning" onClick={handleAddVehicleClick}
      >
        + Cliente
      </Button>
      <ClientTable searchTerm={searchTerm} />
    </div>
  );
};

export default Clients;