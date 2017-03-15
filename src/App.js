import React, { Component } from 'react';
import './stylesheets/App.css';
import * as firebase from 'firebase';
import Task from './components/Task';
import TimerMixin from 'react-timer-mixin';



class App extends React.Component {

  constructor() {
    super();

    this.state = {
      "taskTitle": "A new Task!",
      "taskDescription": "This is a task. It needs to be comleted soon",
      "timeElapsed" : 0,
      "finished": false
    }
  }

  componentDidMount () {
    if (this.state.finished === false) {
      TimerMixin.setInterval(() => {
          this.setState({timeElapsed: this.state.timeElapsed + 1});
          console.log('I do not leak!'); },
        1000);
    }

    TimerMixin.setTimeout(() => {
      this.setState({"finished": true});
      console.log(this.state.finished);
      console.log(this.state.timeElapsed);
    }, 5000)
  }


  render() {
    return (
      <div>
        <div className="panel panel-success task-editor">
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
        <Task
          title={this.state.taskTitle}
          description={this.state.taskDescription}
          time={this.state.timeElapsed}
        />
      </div>
    );
  }
}

export default App;
