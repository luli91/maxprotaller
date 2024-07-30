import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddVehicleForm = ({ onAddVehicle }) => {
  const [formValues, setFormValues] = useState({
    dominio: '',
    marca: '',
    modelo: '',
    color: '',
    chasis: '',
    motor: '',
    kilometraje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVehicle(formValues);
    setFormValues({
      dominio: '',
      marca: '',
      modelo: '',
      color: '',
      chasis: '',
      motor: '',
      kilometraje: '',
    });
  };

  return (
    <Container>
      <h1 className="mb-4">Agregar Vehículo</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDominio">
          <Form.Label>Dominio</Form.Label>
          <Form.Control
            type="text"
            name="dominio"
            value={formValues.dominio}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMarca">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            type="text"
            name="marca"
            value={formValues.marca}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formModelo">
          <Form.Label>Modelo</Form.Label>
          <Form.Control
            type="text"
            name="modelo"
            value={formValues.modelo}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formColor">
          <Form.Label>Color</Form.Label>
          <Form.Control
            type="text"
            name="color"
            value={formValues.color}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formChasis">
          <Form.Label>Chasis</Form.Label>
          <Form.Control
            type="text"
            name="chasis"
            value={formValues.chasis}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMotor">
          <Form.Label>Motor</Form.Label>
          <Form.Control
            type="text"
            name="motor"
            value={formValues.motor}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formKilometraje">
          <Form.Label>Kilometraje</Form.Label>
          <Form.Control
            type="number"
            name="kilometraje"
            value={formValues.kilometraje}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Agregar Vehículo
        </Button>
      </Form>
    </Container>
  );
};

export default AddVehicleForm;