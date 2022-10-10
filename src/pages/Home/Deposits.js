import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../../components/Title';
import Moment from 'moment';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits({receipts}) {


  if(receipts.length > 0){

    const oldestOrder = receipts.reduce((current, order) => {
      return Date.parse(order.Date) < Date.parse(current.Date) ? order : current;
    })

    const newestOrder = receipts.reduce((current, order) => {
      return Date.parse(order.Date) < Date.parse(current.order) ? current : order;
    })

    const totalEarnings = receipts.reduce((orderTotal, order) => {
      let itemTotal = order.Items.reduce((itemTotal, item) => {
        const itemPrice = Number(item.ItemPrice.replace("$", ""));
        const itemQuantity = Number(item.Quantity);
        const itemsTotal =  itemPrice * itemQuantity;
        return itemTotal + itemsTotal;
      }, 0);

      //console.log(`order ${order.OrderId} : ${order.CustomerName} = total = ${itemTotal}`)
      return orderTotal + itemTotal;
    }, 0);

    return (
      <React.Fragment>
        <Title>Total Income Balance</Title>
        <Typography component="p" variant="h4">
          {totalEarnings}
        </Typography>
        <Typography color="text.secondary" sx={{ flex: 1 }} variant="body2" display="block">
          Between {Moment(oldestOrder.Date).format("MMM Do YYYY")} to {Moment(newestOrder.Date).format("MMM Do YYYY")}
        </Typography>
        <div>
          <Link color="primary" href="#" onClick={preventDefault}>
            View balance
          </Link>
        </div>
      </React.Fragment>
    );
  }
  else{
    return <div>Loading...</div>
  }
}
