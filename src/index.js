import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';
global.jQuery = require('jquery');
import $ from 'jquery';
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';

var config = {
  apiKey: "AIzaSyBckf_p4eLyfj-NrtGUB_51dFC-iTZiTkY",
  authDomain: "blocitoff-69708.firebaseapp.com",
  databaseURL: "https://blocitoff-69708.firebaseio.com",
  storageBucket: "blocitoff-69708.appspot.com",
  messagingSenderId: "321005892281"
};
firebase.initializeApp(config);

const db = firebase.database();
const dbRef = db.ref().child('tasks');

var tasks = [];

$(document).ready(function(){
  dbRef.on("child_added", snap => {
    console.log(snap.val());
    tasks.push(snap.val());
  })
});

setTimeout(() => {
  console.log(tasks)}, 2000);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
