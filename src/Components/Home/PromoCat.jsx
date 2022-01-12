import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import "../../Styles/PromoCat.css";

const PromoCat = () => {

  let navigate = useNavigate();

  const btnNav = () => {
    navigate("/categories");
  };
  return (
    <Fragment>
      <div className="container-procat">
      <button className="btn-promos">See all promotions</button>
      <div className="promos">
        <div className="promo-uno">
          <p></p>
        </div>
        <div className="promo-dos">
          <h1>UP TO 50% OFF UP TO 50% OFF UP TO 50% OFF UP TO 50% OFF  UP TO 50% </h1>
        </div>
      </div>
      <button className="btn-categorias" onClick={btnNav}>See all categories</button>
      <div className="categorias">
        <div className="cat-uno">
          <p>Clothes</p>
        </div>
        <div className="cat-dos">
          <p>Shoes</p>
        </div>
        <div className="cat-tres">
          <p>Hand bags</p>
        </div>
      </div>
      </div>
    </Fragment>
  );
};
export default PromoCat;
