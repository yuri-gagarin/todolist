import React from 'react';
import './stylesheets/App.css';
import * as firebase from 'firebase';
import Task from './components/Task';
import TimerMixin from 'react-timer-mixin';
global.jQuery = require('jquery');
import $ from 'jquery';

var config = {
  apiKey: "AIzaSyBckf_p4eLyfj-NrtGUB_51dFC-iTZiTkY",
  authDomain: "blocitoff-69708.firebaseapp.com",
  databaseURL: "https://blocitoff-69708.firebaseio.com",
  storageBucket: "blocitoff-69708.appspot.com",
  messagingSenderId: "321005892281"
};
firebase.initializeApp(config);


const db = firebase.database();
const dbRef = db.ref().child('tasks');

var tasks = [];



var taskId = 4;



class App extends React.Component {

  constructor() {
    super();

    this._addTask = this._addTask.bind(this);
    this._getTaskTitle = this._getTaskTitle.bind(this);
    this._getTaskDescription = this._getTaskDescription.bind(this);

    this.state = {
      tasks:[],
      newTaskTitle: "",
      newTaskDescription: ""
    }
  }

  componentDidMount() {
      const currentState = Object.assign({}, this.state);
      dbRef.on("child_added", (snap) => {
          currentState.tasks.push({
              id: snap.key,
              taskTitle: snap.val().taskTitle,
              taskDescription: snap.val().taskDescription,
              timeElapsed: snap.val().timeElapsed,
              completed: snap.val().completed
          });
          this.setState(currentState);
      });

      dbRef.on("child_removed", (snap) => {
          currentState.tasks = currentState.tasks.filter((task) => {
              return (task.id != snap.key);
          });
       this.setState(currentState);
       console.log(this.state);
      });
  }



  _getTaskTitle (event) {
    this.setState({
      newTaskTitle: event.target.value
    });
  }

  _getTaskDescription (event) {
    this.setState({
      newTaskDescription: event.target.value
    });
  }

  _markCompleted (targetId) {
    const currentState = Object.assign({}, this.state)
    currentState.tasks = currentState.tasks.map(task => {
      if(task.taskId === targetId)
      {
        task.completed = true;
        return task;
      }
      else
      {
        return task;
      }
    });

    this.setState(currentState);
  }

  _addTask (event) {

    event.preventDefault();
    let newTask = {};
    if (this.state.newTaskTitle.length > 0 && this.state.newTaskDescription.length > 0) {
      newTask = {"taskTitle": this.state.newTaskTitle, "taskDescription": this.state.newTaskDescription, "completed": false, "timeElapsed": 0}
      this.setState({newTaskTitle: "", newTaskDescription: ""});
      dbRef.push(newTask);
    }
  }
  _deleteTask (targetId) {

    dbRef.child(targetId).remove();

  }

  render() {

    let tasks = this.state.tasks.map((task, key) => {
      return (
        <Task
          key={key}
          id={task.id}
          title={task.taskTitle}
          description={task.taskDescription}
          time={task.timeElapsed}
          completed={task.completed}
          deleteTask={this._deleteTask.bind(this)}
          markCompleted={this._markCompleted.bind(this)}
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
                <input type="text" className="form-control" maxLength="75" placeholder="Title..." onChange={this._getTaskTitle}></input>
              </div>
              <div className="form-group">
                <label htmlFor="task">Please enter a task</label>
                <textarea className="form-control task-input" rows="3" placeholder="I will complete..." onChange={this._getTaskDescription}></textarea>
              </div>
                <button className="btn btn-success task-button" onClick={this._addTask}>Go!</button>
            </form>
          </div>
        </div>
        {tasks}
      </div>
    );
  }
}

export default App;
