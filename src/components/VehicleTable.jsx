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
  Button,
  TextField,
  tableCellClasses,
  styled,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp, Delete, Edit } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Estilos personalizados
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
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
function createData(dominio, marca, modelo, color, chasis, motor, kilometraje, compañia) {
  return {
    dominio,
    marca,
    modelo,
    color,
    chasis,
    motor,
    kilometraje,
    compañia,
    history: [
      { date: '2020-01-05', description: 'Cambio de aceite', observations: 'Realizado a los 10,000 km' },
      { date: '2020-01-02', description: 'Cambio de neumáticos', observations: 'Neumáticos reemplazados' }
    ]
  };
}

// Componente de fila
function Row({ row, onDelete, onEdit, onDeleteHistory, onEditHistory, onAddHistory }) {
  const [open, setOpen] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editValues, setEditValues] = React.useState({ ...row });
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditValues({ ...editValues, [name]: value });
  };

  const handleSave = () => {
    onEdit(editValues);
    toast.success('Vehículo editado correctamente');
    setIsEditing(false);
  };

  const handleDeleteConfirm = () => {
    onDelete(row.dominio);
    toast.success('Vehículo y su historial eliminados correctamente');
    setOpenDialog(false); 
  };

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
        {isEditing ? (
          <>
            <StyledTableCell>
              <TextField
                name="dominio"
                value={editValues.dominio}
                onChange={handleEditChange}
                size="small"
              />
            </StyledTableCell>
            <StyledTableCell>
              <TextField
                name="marca"
                value={editValues.marca}
                onChange={handleEditChange}
                size="small"
              />
            </StyledTableCell>
            <StyledTableCell>
              <TextField
                name="modelo"
                value={editValues.modelo}
                onChange={handleEditChange}
                size="small"
              />
            </StyledTableCell>
            <StyledTableCell>
              <TextField
                name="color"
                value={editValues.color}
                onChange={handleEditChange}
                size="small"
              />
            </StyledTableCell>
            <StyledTableCell>
              <TextField
                name="chasis"
                value={editValues.chasis}
                onChange={handleEditChange}
                size="small"
              />
            </StyledTableCell>
            <StyledTableCell>
              <TextField
                name="motor"
                value={editValues.motor}
                onChange={handleEditChange}
                size="small"
              />
            </StyledTableCell>
            <StyledTableCell>
              <TextField
                name="kilometraje"
                value={editValues.kilometraje}
                onChange={handleEditChange}
                size="small"
              />
            </StyledTableCell>
            <StyledTableCell>
              <TextField
                name="compañia"
                value={editValues.compañia}
                onChange={handleEditChange}
                size="small"
              />
            </StyledTableCell>
            <TableCell>
              <Button onClick={handleSave}>Guardar</Button>
              <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
            </TableCell>
          </>
        ) : (
          <>
            <StyledTableCell component="th" scope="row">
              {row.dominio}
            </StyledTableCell>
            <StyledTableCell>{row.marca}</StyledTableCell>
            <StyledTableCell>{row.modelo}</StyledTableCell>
            <StyledTableCell>{row.color}</StyledTableCell>
            <StyledTableCell>{row.chasis}</StyledTableCell>
            <StyledTableCell>{row.motor}</StyledTableCell>
            <StyledTableCell>{row.kilometraje}</StyledTableCell>
            <StyledTableCell>{row.compañia}</StyledTableCell>
            <TableCell>
              <IconButton onClick={() => setIsEditing(true)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => setOpenDialog(true)}>
                <Delete />
              </IconButton>
            </TableCell>
          </>
        )}
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
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <HistoryRow
                      key={historyRow.date}
                      historyRow={historyRow}
                      row={row}
                      index={index}
                      onDeleteHistory={onDeleteHistory}
                      onEditHistory={onEditHistory}
                    />
                  ))}
                  <AddHistoryRow row={row} onAddHistory={onAddHistory} />
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmación de Eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Está seguro de que desea eliminar este vehículo y su historial?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

function HistoryRow({ historyRow, row, index, onDeleteHistory, onEditHistory }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editValues, setEditValues] = React.useState({ ...historyRow });
  const [openDialog, setOpenDialog] = React.useState(false); 

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditValues({ ...editValues, [name]: value });
  };

  const handleSave = () => {
    onEditHistory(row.dominio, index, editValues);
    toast.success('Historial editado correctamente');
    setIsEditing(false);
  };

  const handleDeleteConfirm = () => {
    onDeleteHistory(row.dominio, index);
    toast.success('Historial eliminado correctamente');
    setOpenDialog(false); 
  };

  return (
    <>
      <TableRow>
        {isEditing ? (
          <>
            <TableCell>
              <TextField
                name="date"
                value={editValues.date}
                onChange={handleEditChange}
                size="small"
              />
            </TableCell>
            <TableCell>
              <TextField
                name="description"
                value={editValues.description}
                onChange={handleEditChange}
                size="small"
              />
            </TableCell>
            <TableCell>
              <TextField
                name="observations"
                value={editValues.observations}
                onChange={handleEditChange}
                size="small"
              />
            </TableCell>
            <TableCell>
              <Button onClick={handleSave}>Guardar</Button>
              <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
            </TableCell>
          </>
        ) : (
          <>
            <TableCell component="th" scope="row">
              {historyRow.date}
            </TableCell>
            <TableCell>{historyRow.description}</TableCell>
            <TableCell>{historyRow.observations}</TableCell>
            <TableCell>
              <IconButton onClick={() => setIsEditing(true)}>
                <Edit />
              </IconButton>
              <IconButton onClick={() => setOpenDialog(true)}> 
                <Delete />
              </IconButton>
            </TableCell>
          </>
        )}
      </TableRow>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirmación de Eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Está seguro de que desea eliminar este historial?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleDeleteConfirm} color="secondary">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function AddHistoryRow({ row, onAddHistory }) {
  const [newHistory, setNewHistory] = React.useState({
    date: '',
    description: '',
    observations: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHistory({ ...newHistory, [name]: value });
  };

  const handleAdd = () => {
    if (!newHistory.date || !newHistory.description || !newHistory.observations) {
      toast.error('Por favor, complete todos los campos antes de agregar.');
      return;
    }
    onAddHistory(row.dominio, newHistory);
    toast.success('Historial agregado correctamente');
    setNewHistory({ date: '', description: '', observations: '' });
  };

  return (
    <TableRow>
      <TableCell>
        <TextField
          name="date"
          value={newHistory.date}
          onChange={handleChange}
          size="small"
        />
      </TableCell>
      <TableCell>
        <TextField
          name="description"
          value={newHistory.description}
          onChange={handleChange}
          size="small"
        />
      </TableCell>
      <TableCell>
        <TextField
          name="observations"
          value={newHistory.observations}
          onChange={handleChange}
          size="small"
        />
      </TableCell>
      <TableCell>
      <Button
    onClick={handleAdd}
    style={{
      backgroundColor: '#ffc107',  
      color: '#333333',  
    }}
  >
    Agregar
  </Button>
      </TableCell>
    </TableRow>
  );
}

// Componente principal
export default function CollapsibleTable() {
  const [rows, setRows] = React.useState([
    createData('ABC123', 'Toyota', 'Corolla', 'Rojo', 'XYZ123', '1.8L', '15,000 km', 'Sura'),
    createData('DEF456', 'Honda', 'Civic', 'Azul', 'ABC456', '2.0L', '25,000 km', 'Sura'),
    createData('GHI789', 'Ford', 'Focus', 'Negro', 'LMN789', '1.6L', '35,000 km', 'Sura'),
    createData('JKL012', 'Chevrolet', 'Cruze', 'Blanco', 'PQR012', '1.4L', '45,000 km', 'Sura'),
    createData('MNO345', 'Hyundai', 'Elantra', 'Plateado', 'STU345', '1.6L', '55,000 km', 'Sura')
  ]);

  const handleAddCar = (newCar) => {
    setRows([...rows, createData(newCar.dominio, newCar.marca, newCar.modelo, newCar.color, newCar.chasis, newCar.motor, newCar.kilometraje, newCar.compañia)]);
  };

  const handleDeleteCar = (dominio) => {
    setRows(rows.filter((row) => row.dominio !== dominio));
  };

  const handleEditCar = (updatedCar) => {
    setRows(rows.map((row) => (row.dominio === updatedCar.dominio ? updatedCar : row)));
  };

  const handleAddHistory = (dominio, newHistory) => {
    setRows(rows.map((row) =>
      row.dominio === dominio
        ? { ...row, history: [...row.history, newHistory] }
        : row
    ));
  };

  const handleDeleteHistory = (dominio, index) => {
    setRows(rows.map((row) =>
      row.dominio === dominio
        ? { ...row, history: row.history.filter((_, i) => i !== index) }
        : row
    ));
  };

  const handleEditHistory = (dominio, index, updatedHistory) => {
    setRows(rows.map((row) =>
      row.dominio === dominio
        ? { ...row, history: row.history.map((hist, i) => (i === index ? updatedHistory : hist)) }
        : row
    ));
  };

  return (
    <>
      <AddCarForm onAddCar={handleAddCar} />
      <CollapsibleTableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <StyledTableCell>DOMINIO</StyledTableCell>
              <StyledTableCell>MARCA</StyledTableCell>
              <StyledTableCell>MODELO</StyledTableCell>
              <StyledTableCell>COLOR</StyledTableCell>
              <StyledTableCell>CHASIS</StyledTableCell>
              <StyledTableCell>MOTOR</StyledTableCell>
              <StyledTableCell>KILOMETRAJE</StyledTableCell>
              <StyledTableCell>COMPAÑIA</StyledTableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row
                key={row.dominio}
                row={row}
                onDelete={handleDeleteCar}
                onEdit={handleEditCar}
                onDeleteHistory={handleDeleteHistory}
                onEditHistory={handleEditHistory}
                onAddHistory={handleAddHistory}
              />
            ))}
          </TableBody>
        </Table>
      </CollapsibleTableContainer>
    </>
  );
}

function AddCarForm({ onAddCar }) {
  const [newCar, setNewCar] = React.useState({
    dominio: '',
    marca: '',
    modelo: '',
    color: '',
    chasis: '',
    motor: '',
    kilometraje: '',
    compañia: ''
  });
}
