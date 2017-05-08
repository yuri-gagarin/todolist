import React from "react";
import { Redirect } from "react-router";
import * as firebase from "firebase";

export default class NavBar extends React.Component {

  constructor () {
    super();

    this.state = {
      shouldRedirect: false
    }
  }

  logout () {
    firebase.auth().signOut().then(() => {
      this.setState({shouldRedirect: true});
      console.log("signed out");
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    if (!this.state.shouldRedirect) {
      return  (
        <nav className="navbar navbar-default">
        <div className="navbar-right">
          <button className="btn btn-default logout-btn" type="button" onClick={() => { this.logout() }}>Log Out</button>
        </div>
        </nav>
      );
    }
    else {
      return (
        <Redirect to={"/"} />
      );
    }
  }
}
