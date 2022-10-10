import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Box } from "@mui/material"
import Home from "./pages/Home/Home";
import OrderDetail from "./pages/Home/OrderDetail";
import Orders from './pages/Home/Orders';
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard/Dashboard";


function App() {

  const [receipts, setReceipts] = useState({});


  useEffect(() => {
    fetch("/content/receipts.json")
    .then((response) => response.json())
    .then((data) =>{
        //console.log(data);
        setReceipts(data);
    })
    .catch((err) => {
        console.log(err.message);
    })
  }, []);

  return (
    <Box> 
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="dashboard" element={<Dashboard receipts={receipts} />} />
          <Route path="orders" element={<Orders receipts={receipts} />} /> 
          <Route path="orderdetail/:id" element={<OrderDetail receipts={receipts} />} />
          <Route path="customers" element={<Customers receipts={receipts} />} />
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
