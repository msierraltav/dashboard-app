import * as React from 'react';
import { useParams , Link as RLink} from 'react-router-dom';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider'
import Title from '../../components/Title';
import Moment from 'moment';


function FormatPrice(price){
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
}

export default function Orders({receipts}) {

  const {id} = useParams();

  if(receipts.length > 0){

    const order = receipts.filter(order => order.OrderId == id )[0];
    const items = order.Items;
  

    if(items.length > 0 ){
      
      return (

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <React.Fragment>
                <Title>Order detail</Title>
                <Card>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Purchase of {Moment(order.Date).format("MMM Do YY, H:HH")} made by {order.CustomerName}
                    </Typography>
                  </CardContent>
                </Card>
                <Divider />
                <Card>
                  <CardContent>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Item</TableCell>
                          <TableCell align="right">ItemPrice</TableCell>
                          <TableCell align="right">Quantity</TableCell>
                          <TableCell align="right">Total</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {items.map((item) => (
                          <TableRow key={item.Item}>
                            <TableCell>{item.Item}</TableCell>
                            <TableCell align="right">{item.ItemPrice}</TableCell>
                            <TableCell align="right">{item.Quantity}</TableCell>
                            <TableCell align="right">{`${FormatPrice(item.Quantity * item.ItemPrice.replace("$", ""))}`}</TableCell>
                          </TableRow>
                        ))}
                    <TableRow>
                      <TableCell colSpan={3}>Total</TableCell>
                      <TableCell align="right">{order.Total}</TableCell>
                    </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Divider />
                <Card>
                  <CardContent>
                    <RLink color="primary" to="/orders" sx={{ mt: 3 }}>
                      Return
                    </RLink>
                  </CardContent>
                </Card>

              </React.Fragment>

            </Paper>
            </Grid>
          </Grid>
        </Container>
        
      );
    }else{
      <div>Loading...</div>
    }
  }
  else{
    return <div>Loading...</div>
  }
}