import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./Firebase-config.js";

export function Login (email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}