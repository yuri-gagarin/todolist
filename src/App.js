import React, { Component } from 'react';
import './stylesheets/App.css';
import * as firebase from 'firebase';

class App extends React.Component {

  render() {
    return (
      <div>
        <div className="panel panel-default task-editor">
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="task">Please enter a task</label>
                <textarea className="form-control task-input" rows="3" placeholder="I will complete..."></textarea>
                <button className="btn btn-success task-button">Go!</button>
              </div>
            </form>
          </div>
        </div>
        <div className="panel panel-default task-body">
          <h3>This is a task</h3>
          <p>This is a task description</p>
        </div>
      </div>
    );
  }
}

export default App;
