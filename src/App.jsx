import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './Components/Home/Home';
import OrderModal from "./Components/Home/OrderModal";


export const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path= '/' element = {<Home/>} />
        <Route exact path="/order-modal" element={<OrderModal />}/>
      </Routes>
    </Router>
  )
}
