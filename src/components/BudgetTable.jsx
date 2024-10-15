import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button'; 

const columns = [
  { id: 'id', label: 'ID Presupuesto', minWidth: 100 },
  { id: 'client', label: 'Cliente', minWidth: 170 },
  { id: 'date', label: 'Fecha', minWidth: 150, align: 'right' },
  { id: 'total', label: 'Total', minWidth: 120, align: 'right', format: (value) => `$${value.toFixed(2)}` },
  { id: 'actions', label: 'Acciones', minWidth: 170, align: 'center' },
];

// Función para crear datos de presupuesto
function createData(id, client, date, total) {
  return { id, client, date, total };
}

// Ejemplo de datos de presupuestos
const rows = [
  createData(1, 'Juan Pérez', '2024-09-25', 4500),
  createData(2, 'Ana López', '2024-09-26', 1200),
  createData(3, 'Carlos García', '2024-09-27', 3300),
];

export default function BudgetTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="presupuestos table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 'bold', backgroundColor: '#000', color: '#fff' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'actions') {
                        // Botones de acción en la columna de 'Acciones'
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Button variant="contained" size="small" color="primary" style={{ marginRight: '8px' }}>
                              PDF
                            </Button>
                            <Button variant="contained" size="small" color="inherit" style={{ marginRight: '8px' }}>
                              Editar
                            </Button>
                            <Button variant="contained" size="small" color="error">
                              Eliminar
                            </Button>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
