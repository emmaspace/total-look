import React from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ListCategories } from "./Categories/ListCategories";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/categories" element={<ListCategories />} />
      </Routes>
    </Router>
  );
}

export default App;
