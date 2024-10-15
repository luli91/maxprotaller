import React from 'react';
import BudgetTable from '../components/BudgetTable';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Budgets = ({ searchTerm }) => {

    const navigate = useNavigate(); 

  const handleAddBudgetsClick = () => {
    navigate("/Budgets");
  };

  return (
    <div>
      <h1 className="mb-4">Lista de Presupuestos</h1>
      <Button variant="warning" onClick={handleAddBudgetsClick}
      >
        + Presupuesto
      </Button>
      <BudgetTable searchTerm={searchTerm} />
    </div>
  );
};

export default Budgets;