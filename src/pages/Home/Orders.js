import * as React from 'react';
import { Link as RLink} from "react-router-dom";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Title from '../../components/Title';
import Moment from 'moment';

export default function Orders(props) {

  if(props.receipts.length > 0){
    return (

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <React.Fragment>
            <Title>Recent orders</Title>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Items ordered</TableCell>
                  <TableCell align="right">Sale Amount</TableCell>
                  <TableCell >Detail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.receipts.map((row) => (
                  <TableRow key={row.OrderId}>
                    <TableCell>{Moment(row.Date).format("MMM Do YY, h:mm a")}</TableCell>
                    <TableCell>{row.CustomerName}</TableCell>
                    <TableCell align="right">{row.Items.length}</TableCell>
                    <TableCell align="right">{row.Total}</TableCell>
                    <TableCell><RLink to={`/orderdetail/${row.OrderId}`}>🔍</RLink></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </React.Fragment>
          </Paper>
        </Grid>
      </Grid>
    </Container>

    );
  }
  else{
    return <div>Loading...</div>
  }
}