import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import SignupComponent from "../components/SignupComponent";
import App from "../App";


export const AppRoutes = () => {
    return(
    <Router>
      <div>
        <Route exact path="/" component={ LoginComponent } />
        <Route path="/app" component= { App } />
        <Route path ="/signup" component = { SignupComponent } />
      </div>
    </Router>
  );
}
