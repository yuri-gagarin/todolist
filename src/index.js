import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
global.jQuery = require('jquery');
  require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import { store } from "./stores/store"


ReactDOM.render(
    <Provider store={store}>
        <App /></Provider>,
    document.getElementById('root')
);
