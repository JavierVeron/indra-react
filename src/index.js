import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXVFzNV35WwtYWv57JAcLvPVbnWBNsz10",
  authDomain: "el-corte-ingles-b9e99.firebaseapp.com",
  projectId: "el-corte-ingles-b9e99",
  storageBucket: "el-corte-ingles-b9e99.appspot.com",
  messagingSenderId: "1051169104648",
  appId: "1:1051169104648:web:4a55434a9785ae6e83c2bd"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);