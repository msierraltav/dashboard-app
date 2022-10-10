import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { 
  XAxis, 
  YAxis, 
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar 
} from 'recharts';
import Title from './Title';
import Moment from 'moment';

// Generate Sales Data
function createData(date, income) {
  return { date, income };
}

export default function Chart({receipts}) {
  const theme = useTheme();

  const data = [];

  if(receipts.length > 0){

    // format date and price
    receipts.map(order => {
      data.push(
          createData(Moment(order.Date).format("DD-MM-YY"), Number(order.Total.replace("$", ""))) 
        );
    });

    // get total per day
    const totalPerDay = Object.values(data.reduce((a, {date, income}) => {
      a[date] = (a[date] || {date, income: 0});
      a[date].income = String(Number(a[date].income) + Number(income));
      return a;
    }, {}));

    //console.log(data);
    return (
      <React.Fragment>
        <Title>Total per day</Title>
        <ResponsiveContainer>
          <BarChart width={730} height={250} data={totalPerDay}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#8884d8" />
          </BarChart>
          </ResponsiveContainer>
      </React.Fragment>
    );
  }else{
    return <div>Loading...</div>
  }


}