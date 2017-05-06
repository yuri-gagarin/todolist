import React from "react";
import * as firebase from "firebase";



export default class SignupComponent extends React.Component {

  constructor () {
    super();

    this.state = {
      email: "",
      password : "",
    }
  }

  getEmail (event) {
    const newState = Object.assign({}, this.state);
    newState.email = event.target.value;
    this.setState(newState);
    console.log(newState);
  }

  getPassword (event) {
    const newState = Object.assign({}, this.state);
    newState.password = event.target.value;
    this.setState(newState);
    console.log(newState);
  }

  createUser (event) {
    event.preventDefault();
    const email = this.state.email;
    const password = this.state.password;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log({error: errorCode, message: errorMessage});
    })
  }

  render () {
    return (
      <div className="container-fluid">
        <h1 className="text-center">Sign Up</h1>
        <form>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="text" className="form-control" id="signup-email" placeholder="Please enter email..." onChange={(event) => {this.getEmail(event)}}/>
          </div>
          <div className="form-group">
            <label htmlFor="Password">Password</label>
            <input type="text" className="form-control" id="signup-password" placeholder="Please enter password..." onChange={(event) => {this.getPassword(event)}}/>
          </div>
          <button className="btn btn-primary" onClick={ (event) => {this.createUser(event) } }>Sign Up!</button>
        </form>
      </div>
    )
  }
}
