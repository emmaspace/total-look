import React from "react";
import OrderModal from "./Home/OrderModal";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<OrderModal />}/>
      </Routes>
    </Router>
  );
}

export default App;
