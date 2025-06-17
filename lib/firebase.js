// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5DcVY5Lu8ept-WXY-q8tkrMHXBcFesos",
  authDomain: "antarikxplorer.firebaseapp.com",
  projectId: "antarikxplorer",
  storageBucket: "antarikxplorer.firebasestorage.app",
  messagingSenderId: "1027144169882",
  appId: "1:1027144169882:web:3cf49f24c1e7804144e223",
  measurementId: "G-NHFNKJXE4F",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };