import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../../Styles/LogIn.css";
import useAuth from "../../hooks/useAuth";

export default function LogIn() {
  let navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, handleSubmit] = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(loginEmail, loginPassword);
      console.log(loginEmail);
    } catch (error) {
      console.log("Contraseña o usuario no válido");
    }
  };

  return (
    <div className="LogIn">
      <section>
        <Header />
      </section>
      <div className="LogIn-Form">
        <p className="LogIn-Text">Log in</p>
        <form className="Form" onSubmit={handleSubmit}>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            required
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
          />

          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
          />

          <div className="errorLogin">{error}</div>
          <button
            className="Continue-with-email"
            type="submit"
            value="INGRESAR"
            onClick={() => submit()}
          >
            Continue with email
          </button>
          {/* <Link to="/" className="Continue-with-email">Continue with email</Link> */}
        </form>
        <section>
          <Footer />
        </section>
      </div>
    </div>
  );
}
