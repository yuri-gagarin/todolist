import React, { Component } from 'react';
import './stylesheets/App.css';
import * as firebase from 'firebase';
import Task from './components/Task';
import TimerMixin from 'react-timer-mixin';



class App extends React.Component {

  constructor() {
    super();

    this.addTask = this.addTask.bind(this);
    this.getTaskTitle = this.getTaskTitle.bind(this);
    this.getTaskDescription = this.getTaskDescription.bind(this);

    this.state = {
      tasks:[{
              "taskTitle": "A new Task!",
              "taskDescription": "This is a task. It needs to be comleted soon",
              "timeElapsed" : 0,
              "completed": false
            },
            {
              "taskTitle": "Another Task!",
              "taskDescription": "This yet another task. It needs to be comleted soon",
              "timeElapsed" : 0,
              "completed": false
            },
            {
              "taskTitle": "Wash the car",
              "taskDescription": "wash your damn car",
              "timeElapsed" : 0,
              "completed": false
            }],
      newTaskTitle: "",
      newTaskDescription: ""
    }
  }

  addTask (event) {

    event.preventDefault();

    const newState = Object.assign({}, this.state);

    console.log(newState);
    
    if (this.state.newTaskTitle.length > 0 && this.state.newTaskDescription.length > 0) {
      newState.tasks.push({"taskTitle": this.state.newTaskTitle, "taskDescription": this.state.newTaskDescription, "completed": false})
      newState.newTaskDescription = "";
      newState.newTaskTitle = "";

      this.setState(newState);
      console.log(this.state);
    }
  }

  getTaskTitle (event) {
    this.setState({
      newTaskTitle: event.target.value
    });
  }

  getTaskDescription (event) {
    this.setState({
      newTaskDescription: event.target.value
    });
  }

  /*
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
 */

  render() {

    let tasks = this.state.tasks.map((task, key) => {
      return (
        <Task
          key={key}
          title={task.taskTitle}
          description={task.taskDescription}
          time={task.timeElapsed}
          complete={task.completed}
        />
      );
    });

    return (
      <div>
        <div className="panel panel-success task-editor">
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label htmlFor="title">Task title</label>
                <input type="text" className="form-control" maxLength="75" placeholder="Title..." onChange={this.getTaskTitle}></input>
              </div>
              <div className="form-group">
                <label htmlFor="task">Please enter a task</label>
                <textarea className="form-control task-input" rows="3" placeholder="I will complete..." onChange={this.getTaskDescription}></textarea>
              </div>
                <button className="btn btn-success task-button" onClick={this.addTask}>Go!</button>
            </form>
          </div>
        </div>
        {tasks}
      </div>
    );
  }
}

export default App;
