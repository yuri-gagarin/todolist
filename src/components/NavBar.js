import React from "react";
import * as firebase from "firebase";

export default class NavBar extends React.Component {

  logout () {
    firebase.auth().signOut().then(() => {
      console.log("signed out");
    }).catch((error) => {
      console.log(error);
    });
  }

  render() {
    return  (
      <nav className="navbar navbar-default">
      <div className="navbar-right">
        <button className="btn btn-default logout-btn" type="button" onClick={() => { this.logout() }}>Log Out</button>
      </div>
      </nav>
    )
  }
}
