import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Collapse,
  Box,
  Typography,
  Paper,
  styled
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

// Estilos personalizados
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.text.primary,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:hover': {
    backgroundColor: theme.palette.action.selected,
  },
}));

const CollapsibleTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

// Función para crear datos de autos
function createData(dominio, marca, modelo, color, chasis, motor, kilometraje) {
  return {
    dominio,
    marca,
    modelo,
    color,
    chasis,
    motor,
    kilometraje,
    history: [
      { date: '2020-01-05', description: 'Cambio de aceite', observations: 'Realizado a los 10,000 km' },
      { date: '2020-01-02', description: 'Cambio de neumáticos', observations: 'Neumáticos reemplazados' }
    ]
  };
}

// Datos de ejemplo
const rows = [
  createData('ABC123', 'Toyota', 'Corolla', 'Rojo', 'XYZ123', '1.8L', '15,000 km'),
  createData('DEF456', 'Honda', 'Civic', 'Azul', 'ABC456', '2.0L', '25,000 km'),
  createData('GHI789', 'Ford', 'Focus', 'Negro', 'LMN789', '1.6L', '35,000 km'),
  createData('JKL012', 'Chevrolet', 'Cruze', 'Blanco', 'PQR012', '1.4L', '45,000 km'),
  createData('MNO345', 'Hyundai', 'Elantra', 'Plateado', 'STU345', '1.6L', '55,000 km')
];

// Componente de fila
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <StyledTableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <StyledTableCell component="th" scope="row">
          {row.dominio}
        </StyledTableCell>
        <StyledTableCell>{row.marca}</StyledTableCell>
        <StyledTableCell>{row.modelo}</StyledTableCell>
        <StyledTableCell>{row.color}</StyledTableCell>
        <StyledTableCell>{row.chasis}</StyledTableCell>
        <StyledTableCell>{row.motor}</StyledTableCell>
        <StyledTableCell>{row.kilometraje}</StyledTableCell>
      </StyledTableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Historial
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Fecha</StyledTableCell>
                    <StyledTableCell>Descripción</StyledTableCell>
                    <StyledTableCell>Observaciones</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.description}</TableCell>
                      <TableCell>{historyRow.observations}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Componente principal
export default function CollapsibleTable() {
  return (
    <CollapsibleTableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <StyledTableCell>Dominio</StyledTableCell>
            <StyledTableCell>Marca</StyledTableCell>
            <StyledTableCell>Modelo</StyledTableCell>
            <StyledTableCell>Color</StyledTableCell>
            <StyledTableCell>Chasis</StyledTableCell>
            <StyledTableCell>Motor</StyledTableCell>
            <StyledTableCell>Kilometraje</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.dominio} row={row} />
          ))}
        </TableBody>
      </Table>
    </CollapsibleTableContainer>
  );
}
