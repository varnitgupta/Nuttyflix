import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB-5UI00jeWkfIqZJgWUvuO4o2y7Zj44lY",
//   authDomain: "netflixx-f8d54.firebaseapp.com",
//   projectId: "netflixx-f8d54",
//   storageBucket: "netflixx-f8d54.appspot.com",
//   messagingSenderId: "630554123297",
//   appId: "1:630554123297:web:beeefa7d7a0dcf01de9760",
//   measurementId: "G-GP4MNK65SN"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); 
// npm install firebase 
// firebase login 
// firebase init 
// firebase deploy