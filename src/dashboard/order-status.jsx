import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import PrintIcon from '@mui/icons-material/Print';
import AddIcon from '@mui/icons-material/Add';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CardLayout from '../components/card-layout';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.common.white,
    border: 0,
    height: '50px',
    '&:first-child': {
      borderRadius: '14px 0 0 14px',
    },
    '&:last-child': {
      borderRadius: '0 14px 14px 0',
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  //   '&:nth-of-type(odd)': {
  //     backgroundColor: theme.palette.action.hover,
  //   },
  // '&:first-child td, &:first-child th': {
  //   border: 0,
  // },

  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(invoice, customer, cusFrom, price, status) {
  return { invoice, customer, cusFrom, price, status };
}

const rows = [
  createData(1651, 'Charly Dues', 'Brazil', '$299', 'Process'),
  createData(1652, 'Marko', 'Brazil', '$456', 'Open'),
  createData(1653, 'Deniyel Onak', 'Italy', '$456', 'On Hold'),
  createData(1654, 'Belgiri Bastana', 'Italy', '$987', 'Process'),
  createData(1655, 'Sarti Onuska', 'Russia', '$459', 'Open'),
];

function CustomizedTables() {
  return (
    <TableContainer sx={{ boxShadow: 'none' }} component={Paper}>
      <Table sx={{ minWidth: 700 }} size='small' aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>INVOICE</StyledTableCell>
            <StyledTableCell>CUSTOMER</StyledTableCell>
            <StyledTableCell>FROM</StyledTableCell>
            <StyledTableCell>PRICE</StyledTableCell>
            <StyledTableCell>STATUS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <StyledTableRow key={row.invoice}>
              <StyledTableCell component='th' scope='row'>
                {row.invoice}
              </StyledTableCell>
              <StyledTableCell>{row.customer}</StyledTableCell>
              <StyledTableCell>{row.cusFrom}</StyledTableCell>
              <StyledTableCell>{row.price}</StyledTableCell>
              <StyledTableCell>
                <Box
                  sx={{
                    borderRadius: '14px',
                    padding: '6px',
                    backgroundColor:
                      i === 0
                        ? 'primary'
                        : i === 1
                        ? 'secondary'
                        : i === 2
                        ? 'custom1'
                        : i === 3
                        ? 'custom2'
                        : 'custom3',
                  }}
                >
                  {row.status}
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default function OrderStatus() {
  return (
    <CardLayout title='Order Status' subtitle='List of orders'>
      <Stack
        sx={{
          marginTop: '20px',
          marginBottom: '40px',
        }}
        direction='row'
        justifyContent='space-between'
      >
        <Stack direction='row' spacing={1}>
          <Button variant='contained'>
            <AddIcon />
            {' Add'}
          </Button>
          <Button variant='outlined' aria-label='info'>
            <InfoIcon />
          </Button>
          <Button variant='outlined' aria-label='delete'>
            <DeleteIcon />
          </Button>
          <Button variant='outlined' aria-label='print'>
            <PrintIcon />
          </Button>
        </Stack>
        <Stack direction='row' spacing={1}>
          <TextField id='outlined-basic' label='Search' variant='outlined' />
          <Button variant='outlined' aria-label='print'>
            <SearchIcon />
          </Button>
        </Stack>
      </Stack>
      <CustomizedTables />
    </CardLayout>
  );
}
