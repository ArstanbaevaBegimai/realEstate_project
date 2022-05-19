// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOwPZ7Ogld5BpqnVV8A_RS3N_AN98JHEk",
  authDomain: "react-team-hackaton.firebaseapp.com",
  projectId: "react-team-hackaton",
  storageBucket: "react-team-hackaton.appspot.com",
  messagingSenderId: "401868678245",
  appId: "1:401868678245:web:524b1b36046947c1e6d28c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);