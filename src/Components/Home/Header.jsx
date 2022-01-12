import React, { useEffect, useState } from "react";
import "../../Styles/header.css";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = ({ modal, setModal }) => {
  const [user, handlesignOut ] = useAuth();
  const modalControl = (e) => {
    e.preventDefault();
    if (!modal) setModal(true);
    else if (modal) setModal(false);
    console.log(modal);
  };
  let navigate = useNavigate();
  const btnNav = () => {
    navigate("/login");
  };
  return (
    <>
      <section id="header">
        <img src="/Logo-totallook.png" alt="Total-Look-Logo" id="logo" />
        {user ? user.name : <button className="btn-login" onClick={btnNav}>
          Login
        </button>}
        <button className="btn-shopping-cart" onClick={(e) => modalControl(e)}>
          {" "}
          <img className="bag-cart" src="/shop.png" alt="cart" />
        </button>
        <form className="search">
          <input type="text" placeholder="Search..." aria-label="search products"></input>
          <button className="btn-search">
            <img className="img-search" src="/search.png" alt="search"></img>
          </button>
        </form>
        <button className="bttn-logout btn-logout" onClick={handlesignOut}>
          Log Out
        </button>
      </section>
    </>
  );
};
export default Header;
