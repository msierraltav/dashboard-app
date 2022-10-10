import * as React from 'react';
import { Link as RLink} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import Title from '../components/Title';

import Moment from 'moment';


export default function Customers({receipts}){

  if(receipts.length > 0){

    const customersIDs = [... new Set(receipts.map( x => (
      {
        id: x.CustomerId,
        name: x.CustomerName
      }
    ) ))];

    const uniqueIds = new Set();

    const uniqueCustomers = customersIDs.filter(element => {
      const isDuplicate = uniqueIds.has(element.id);
      uniqueIds.add(element.id);
      return !isDuplicate? true : false;
    });

    const customerData = uniqueCustomers.map( customer => {
      const purchases = receipts.filter(x => x.CustomerId == customer.id);
      return ({
        id:customer.id,
        name: customer.name,
        purchases: purchases
      })
    });

    return (
      <Box>
      {
        customerData.map((customer) => (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} key={customer.id}>
          <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <React.Fragment>
              <Title>{`Customer #${customer.id} - Name : ${customer.name}`}</Title>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell align="right">Items ordered</TableCell>
                      <TableCell align="right">Sale Amount</TableCell>
                      <TableCell >Detail</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customer.purchases.map((row) => (
                      <TableRow key={row.OrderId}>
                        <TableCell>{Moment(row.Date).format("MMM Do YY, h:mm a")}</TableCell>
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
        ))
      }
      </Box>
    );
  }
  else{
    return <div>Loading...</div>
  }
}