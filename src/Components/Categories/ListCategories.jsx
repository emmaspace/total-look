import React from "react";
import { AddCategory } from "./AddCategory";
import "../../Styles/ListCategories.css";

export default function ListCategories() {
  return (
    <div className="list-categories">
      <div className="head-categories">
        <AddCategory />

        <p>Botón buscar</p>
      </div>
    </div>
  );
}
