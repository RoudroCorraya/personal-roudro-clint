// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt36fpjB6BHkBER9R-qlkaoScb_ukzAE8",
  authDomain: "portfolio-roudro-clint.firebaseapp.com",
  projectId: "portfolio-roudro-clint",
  storageBucket: "portfolio-roudro-clint.firebasestorage.app",
  messagingSenderId: "577789139752",
  appId: "1:577789139752:web:235fc2ba4a1aa61478ce1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;