import React from "react";
import connect from "react-redux";
import { Redirect } from "react-router";
import * as firebase from "firebase";



export default class LoginComponent extends React.Component {

  constructor () {
    super();
    this.state = {
      email: "",
      password: "",
      shouldRedirect: false
    }
  }

  getEmail(event) {
    const newState = Object.assign({}, this.state);
    newState.email = event.target.value;
    this.setState(newState);
  }

  getPassword(event) {
    const newState = Object.assign({}, this.state);
    newState.password = event.target.value;
    this.setState(newState);
  }

  logIn(event) {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password
    console.log("Hello")

    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {this.setState({shouldRedirect: true}) }).catch((error) => {
      if (error) {
        console.log(error);
      }
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log(user);
      }
      else {
        console.log("Not logged in");
      }
    });
  }

  render () {

      if (this.state.shouldRedirect) {
        return (
          <Redirect to={'/app'} />
        )
      }
      else {
        return (
        <div className="container-fluid">
          <h1 className="text-center">Welcome</h1>
          <form>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput">Email</label>
              <input type="text" className="form-control" id="login-email" placeholder="Please enter email..." onChange={(event) => {this.getEmail(event)}}/>
            </div>
            <div className="form-group">
              <label htmlFor="formGroupExampleInput2">Password</label>
              <input type="text" className="form-control" id="login-password" placeholder="Please enter password..." onChange={(event) => {this.getPassword(event)}}/>
            </div>
          </form>
          <button type="button" className="btn btn-success login-btn" onClick={(event) => { this.logIn(event) }}>Login</button>
          <div className="signup">
            <h4>Dont have an account?</h4>
            <button type="button" className="btn btn-default signup-btn">Sign Up</button>
          </div>
        </div>
      )
      }
  }
}

function mapStateToProps (state) {
  return
}
