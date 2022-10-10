import React from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from '../../components/Chart';
import Deposits from '../Home/Deposits';
import Container from '@mui/material/Container';

export default function Dashboard(props){
    return (

        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                    >
                    <Chart  receipts={props.receipts} />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        height: 240,
                    }}
                    >
                    <Deposits receipts={props.receipts} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};