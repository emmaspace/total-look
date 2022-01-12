import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import './App.css';
import Home from './Components/Home/Home';
import LogIn from './Components/Home/LogIn';
import ListCategories from './Components/Categories/ListCategories'

export default function App () {
  return (
    <Router> 
      <Routes>
        <Route path= '/' element = {<Home/>} />
        <Route path= '/categories' element = {<ListCategories/>} />
        <Route path= '/login' element = {<LogIn/>} />
      </Routes>
    </Router>
  )
}
