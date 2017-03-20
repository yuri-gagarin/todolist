import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';
global.jQuery = require('jquery');
import $ from 'jquery';
require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
