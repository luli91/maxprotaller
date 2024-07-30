import React from 'react';
import AddVehicleForm from '../components/AddVehicleForm';

const NewVehicle = ({ onAddVehicle }) => {
  return (
    <div>
      <AddVehicleForm onAddVehicle={onAddVehicle} />
    </div>
  );
};

export default NewVehicle;