import React from "react";
import connect from "react-redux";
import * as firebase from "firebase";



export default class LoginComponent extends React.Component {

  constructor () {
    super();
    this.state = {
      email: "",
      password: ""
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
    const password = this.state.password;

    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      if (error) {
        console.log(error);
      }
    });
  }

  render () {
    return(
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
        <button type="button" className="btn btn-success login-btn">Login</button>
        <div className="signup">
          <h4>Dont have an account?</h4>
          <button type="button" className="btn btn-default signup-btn">Sign Up</button>
        </div>

      </div>


    )
  }
}

function mapStateToProps (state) {
  return
}
