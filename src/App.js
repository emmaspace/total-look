import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Welcome from './Components/Welcome';


export const App = () => {
  return (
    <Router> 
      <Routes>
        <Route path= '/' element = {<Welcome/>} />
      </Routes>
    </Router>
  )
}



export default App;
