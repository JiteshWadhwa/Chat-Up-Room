import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxNsbR4Ko79ssh7mmxjE200aoxgiGJLfk",
  authDomain: "chat-up-room.firebaseapp.com",
  databaseURL: "https://chat-up-room-default-rtdb.firebaseio.com",
  projectId: "chat-up-room",
  storageBucket: "chat-up-room.appspot.com",
  messagingSenderId: "52521533324",
  appId: "1:52521533324:web:72880e5ca8ed58e764a0a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
