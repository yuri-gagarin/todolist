import React from 'react';
import './stylesheets/App.css';
import * as firebase from 'firebase';
import Task from './components/Task';
import TimerMixin from 'react-timer-mixin';


var taskId = 3;

class App extends React.Component {

  constructor() {
    super();

    this._addTask = this._addTask.bind(this);
    this._getTaskTitle = this._getTaskTitle.bind(this);
    this._getTaskDescription = this._getTaskDescription.bind(this);

    this.state = {
      tasks:[{
              "taskId": 0,
              "taskTitle": "A new Task!",
              "taskDescription": "This is a task. It needs to be comleted soon",
              "timeElapsed" : 0,
              "completed": false
            },
            {
              "taskId": 1,
              "taskTitle": "Another Task!",
              "taskDescription": "This yet another task. It needs to be comleted soon",
              "timeElapsed" : 0,
              "completed": false
            },
            {
              "taskId": 2,
              "taskTitle": "Wash the car",
              "taskDescription": "wash your damn car",
              "timeElapsed" : 0,
              "completed": false
            }],
      newTaskTitle: "",
      newTaskDescription: ""
    }
  }

  _addTask (event) {

    event.preventDefault();

    const newState = Object.assign({}, this.state);

    if (this.state.newTaskTitle.length > 0 && this.state.newTaskDescription.length > 0) {
      newState.tasks.push({"taskId": taskId, "taskTitle": this.state.newTaskTitle, "taskDescription": this.state.newTaskDescription, "completed": false})
      newState.newTaskDescription = "";
      newState.newTaskTitle = "";
      taskId++;

      this.setState(newState);
      console.log(this.state.tasks)
    }
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

  _deleteTask (task) {
    const tasks = this.state.tasks;
    const currentTask = task;

    tasks.forEach((el) => {
      if(el == currentTask) {
        console.log(el);
        console.log(currentTask);
      }
    });
    console.log(taskId);
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
          taskId={task.taskId}
          title={task.taskTitle}
          description={task.taskDescription}
          time={task.timeElapsed}
          complete={task.completed}
          deleteTask={this._deleteTask.bind(this)}
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
