// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, push } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBImnR0ZRlIElw-Ao-ssi8CjscqiLm6Wa8",
  authDomain: "dark-haker.firebaseapp.com",
  databaseURL: "https://dark-haker-default-rtdb.firebaseio.com",
  projectId: "dark-haker",
  storageBucket: "dark-haker.firebasestorage.app",
  messagingSenderId: "186612807780",
  appId: "1:186612807780:web:479f0949b59e8fcc584771",
  measurementId: "G-96JW44RLYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database, ref, set, onValue, push };
