import * as React from 'react';
import { styled } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const theme = createTheme({
  palette:{
    primary: {
      main:"#000405",
    },
    secondary: {
      main: "#C4C4CC",
    },
  }
})

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.secondary.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(status, codigo, detalhamento, data, protein) {
  return { status, codigo, detalhamento, data, protein };
}

const rows = [
  createData(
    'Pendente',
     "0005",
      "1x Salada Radish, 1 x Torrada de Parma, 1x Chá de Canela, 1x Súco de maracujá",
      24,
      4.0
      ),
  createData(
    'Preparando',
     "0004",
      9.0,
      37,
      4.3
      ),
  createData(
    'Entregue',
     "0003",
      16.0,
      24,
      6.0
      ),
  createData(
    'Entregue',
     "0002",
      3.7,
      67,
      4.3
      ),
  createData(
    'Entregue',
     "0001",
      16.0,
      49,
      3.9
      ),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell align="center">Código</StyledTableCell>
            <StyledTableCell align="center">Detalhamento</StyledTableCell>
            <StyledTableCell align="center">Data e hora</StyledTableCell>
            {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.status}>
              <StyledTableCell component="th" scope="row">
                {row.status}
              </StyledTableCell>
              <StyledTableCell align="center">{row.codigo}</StyledTableCell>
              <StyledTableCell align="center">{row.detalhamento}</StyledTableCell>
              <StyledTableCell align="center">{row.data}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
