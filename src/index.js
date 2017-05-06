import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginComponent from './components/LoginComponent'
global.jQuery = require('jquery');
  require('bootstrap');
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import { store } from "./stores/store";
import { createBrowserHistory } from "history";
import { syncHistoryWithStore } from "react-router-redux";
import { AppRoutes } from "./routes/routes";


const history = syncHistoryWithStore(createBrowserHistory(), store);
console.log(history);

ReactDOM.render(
    <Provider store={store}>
      <AppRoutes />
    </Provider>,
    document.getElementById('root')
);
