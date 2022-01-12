/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { signOut } from "@firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase-config";
import { Login } from "../Firebase/loginauth";

export default function useAuth() {
  const [user, setUser] = useState();
  const [error, setError] = useState();
  let navigate = useNavigate();

  const handlesignOut = async () => {
    try {
      await signOut(auth);
      console.log("salió");
    } catch (error) {
      console.log("error");
    }
  };

  const handleSubmit = async (loginEmail, loginPassword) => {
    try {
      await Login(loginEmail, loginPassword);
      // navigate("/categories");
      console.log(loginEmail);
    } catch (error) {
      setError("Contraseña o usuario no válido");
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (fUser) => {
      if (fUser) {
        setUser(fUser);
        // navigate("/categories");
      } else {
        setUser();
        // navigate("/login");
      }
    });
    // eslint-disable-next-line
  }, [handleSubmit, handlesignOut]);

  return [user, error, handlesignOut, handleSubmit];
}
