import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Data from './Data.json';
import { BrowserRouter } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/database';
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCGiXxXvWmAR_O3hEu3oLbY63o_luOIT0Q",
  authDomain: "loku-f7157.firebaseapp.com",
  databaseURL: "https://loku-f7157.firebaseio.com",
  projectId: "loku-f7157",
  storageBucket: "loku-f7157.appspot.com",
  messagingSenderId: "117191687967",
  appId: "1:117191687967:web:ae54c9f1f8e3a2b7843a2a",
  measurementId: "G-9LQSJ8SV5F"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// let rootRef = firebase.database().ref('Seattle');
// rootRef.on('value', (snapshot) => {
//   let amitValue = snapshot.val();
//   console.log(amitValue); //=> { age: 35, petName: "Spot" }
//   //can do something else with amitValue (e.g., assign with this.setState())
// });

ReactDOM.render(
  <BrowserRouter>
    <App Data={Data}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
