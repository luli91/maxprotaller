import React from 'react';
import AddClientForm from '../components/AddClientForm';

const NewClient = ({ onAddClient}) => {
  return (
    <div>
      <AddClientForm onAddClient={onAddClient} />
    </div>
  );
};

export default NewClient;