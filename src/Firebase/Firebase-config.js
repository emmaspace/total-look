import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCvycJjhFbtQLAiQlQsNlr95P80u4rEGS8",
  authDomain: "total-look-bravebellotas.firebaseapp.com",
  projectId: "total-look-bravebellotas",
  storageBucket: "total-look-bravebellotas.appspot.com",
  messagingSenderId: "1083382988092",
  appId: "1:1083382988092:web:a606ca7b8baa9b592ab239"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)