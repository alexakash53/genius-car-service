// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkr1jdcFHtIxXPXo3v48ocMkodo0gZ3J0",
  authDomain: "simple-authentication-6b596.firebaseapp.com",
  projectId: "simple-authentication-6b596",
  storageBucket: "simple-authentication-6b596.appspot.com",
  messagingSenderId: "379208136234",
  appId: "1:379208136234:web:af66d9ce3e1e351b1ab553",
  measurementId: "G-30W5T64EC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
