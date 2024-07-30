import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, lastName, phone, email, car) {
  return { name, lastName, phone, email, car };
}

const rows = [
  createData('John', 'Doe', '123-456-7890', 'john.doe@example.com', 'Toyota Corolla'),
  createData('Jane', 'Smith', '234-567-8901', 'jane.smith@example.com', 'Honda Civic'),
  createData('Alice', 'Johnson', '345-678-9012', 'alice.johnson@example.com', 'Ford Focus'),
  createData('Bob', 'Brown', '456-789-0123', 'bob.brown@example.com', 'Chevrolet Malibu'),
  createData('Carol', 'Davis', '567-890-1234', 'carol.davis@example.com', 'Hyundai Elantra'),
];

export default function CustomizedTables() {
  const handleEdit = (name) => {
    console.log('Edit:', name);
  };

  const handleDelete = (name) => {
    console.log('Delete:', name);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Apellido</StyledTableCell>
            <StyledTableCell>Teléfono</StyledTableCell>
            <StyledTableCell>Mail</StyledTableCell>
            <StyledTableCell>Auto</StyledTableCell>
            <StyledTableCell>Acciones</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.lastName}</StyledTableCell>
              <StyledTableCell>{row.phone}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.car}</StyledTableCell>
              <StyledTableCell>
                <IconButton onClick={() => handleEdit(row.name)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(row.name)}>
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
