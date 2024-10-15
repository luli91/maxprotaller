import React from 'react';
import Calendar from '../components/Calendar'; 
import { Container, Typography } from '@mui/material';

const TasksCalendar = () => {
  return (
    <Container sx={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Calendario de Tareas
      </Typography>
      <Calendar /> 
    </Container>
  );
};

export default TasksCalendar;