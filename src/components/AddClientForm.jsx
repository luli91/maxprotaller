import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddClientForm = ({ onAddClient }) => {
  const [formValues, setFormValues] = useState({
    nombre: '',
    telefono: '',
    mail: '',
    vehiculo: '',
    compañia: '',
    dominio: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefauCompañia
    onAddClient(formValues);
    setFormValues({
        nombre: '',
        telefono: '',
        mail: '',
        vehiculo: '',
        compañia: '',
        dominio: '',
    });
  };

  return (
    <Container>
      <h1 className="mb-4">Agregar Cliente</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            name="nombre"
            value={formValues.nombre}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formTelefono">
          <Form.Label>Telefono</Form.Label>
          <Form.Control
            type="text"
            name="telefono"
            value={formValues.telefono}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formMail">
          <Form.Label>Mail</Form.Label>
          <Form.Control
            type="text"
            name="mail"
            value={formValues.mail}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formVehiculo">
          <Form.Label>Vehiculo</Form.Label>
          <Form.Control
            type="text"
            name="vehiculo"
            value={formValues.vehiculo}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="formCompañia">
          <Form.Label>Compañia</Form.Label>
          <Form.Control
            type="text"
            name="compañia"
            value={formValues.compañia}
            onChange={handleChange}
            required
          />
        </Form.Group>
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
        <Button variant="primary" type="submit" className="mt-3">
          Agregar Cliente
        </Button>
      </Form>
    </Container>
  );
};

export default AddClientForm;