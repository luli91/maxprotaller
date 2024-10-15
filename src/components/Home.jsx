import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Grid, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Home = () => {
  // Estado para manejar las tareas
  const [tasks, setTasks] = useState([
    { id: 1, fecha: '08/10/2024', descripcion: 'Cambiar aceite del vehículo', vehiculo: 'Ford Fiesta', dueño: 'Juan Pérez', completada: false },
    { id: 2, fecha: '10/10/2024', descripcion: 'Revisión general del motor', vehiculo: 'Toyota Corolla', dueño: 'Ana López', completada: false },
    { id: 3, fecha: '11/10/2024', descripcion: 'Reparación de frenos', vehiculo: 'Honda Civic', dueño: 'Carlos García', completada: true },
  ]);

  // Función para marcar las tareas como completadas
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completada: !task.completada } : task
    ));
  };

  return (
    <Container sx={{ marginTop: '20px', marginBottom: '20px' }}>
      <Typography variant="h3" gutterBottom>Bienvenido a MaxProTaller</Typography>

      {/* Tarjetas de resumen */}
      <Grid container spacing={3} className="summary-cards">
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Total Vehículos</Typography>
              <Typography variant="h6">120</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Total Clientes</Typography>
              <Typography variant="h6">85</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Presupuestos Realizados</Typography>
              <Typography variant="h6">30</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Tarjetas de Tareas */}
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px' }}>Tareas Pendientes</Typography>
      <Grid container spacing={3} className="task-cards">
        {tasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <Card
              style={{
                opacity: task.completada ? 0.5 : 1,  // Más borroso si está completada
                position: 'relative',
                transition: 'opacity 0.5s',
              }}
              onClick={() => toggleComplete(task.id)}  // Marcar como completada
            >
              <CardContent>
                <Typography variant="h6">Vehículo: {task.vehiculo}</Typography>
                <Typography variant="body1">Dueño: {task.dueño}</Typography>
                <Typography variant="body2">Descripción: {task.descripcion}</Typography>
                <Typography variant="body2">Fecha: {task.fecha}</Typography>
                {task.completada && (
                  <CheckCircleIcon
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      color: 'green',
                      fontSize: '40px',
                    }}
                  />
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
        {/* Botón para agregar tarea */}
      <div style={{ marginTop: '20px' }}>
        <Button variant="contained" color="primary" component={Link} to="/calendar">
          Agregar Tarea
        </Button>
      </div>
      {/* Enlaces rápidos */}
      <div className="quick-links" style={{ marginTop: '30px' }}>
        <Button variant="contained" color="primary" component={Link} to="/vehicles" style={{ marginRight: '10px' }}>Ver Vehículos</Button>
        <Button variant="contained" color="primary" component={Link} to="/clients" style={{ marginRight: '10px' }}>Ver Clientes</Button>
        <Button variant="contained" color="primary" component={Link} to="/new-budget">Crear Presupuesto</Button>
      </div>
      </Container>
  );
};

export default Home;
