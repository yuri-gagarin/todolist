import React from 'react';
import { connect } from "react-redux";
import './stylesheets/App.css';
import Task from './components/Task';
import NavBar from './components/NavBar';
global.jQuery = require('jquery');
import { fetchTasks, pushTask, destroyTask } from './actions/actions'


class App extends React.Component {

  constructor() {
    super();

    this._addTaskToFirebase = this._addTaskToFirebase.bind(this);
    this._getTaskTitle = this._getTaskTitle.bind(this);
    this._getTaskDescription = this._getTaskDescription.bind(this);

    this.state = {
      newTaskTitle: "",
      newTaskDescription: ""
    }
  }

  componentWillMount() {

  }
  componentDidMount() {
    this.props.loadTasks();

      /*
      dbRef.on("child_removed", (snap) => {
          currentState.tasks = currentState.tasks.filter((task) => {
              return (task.id != snap.key);
          });
       this.setState(currentState);
      });
    */
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

  _addTaskToFirebase (event) {

    event.preventDefault();
    let newTask = {};
    if (this.state.newTaskTitle.length > 0 && this.state.newTaskDescription.length > 0) {
      newTask = {"taskTitle": this.state.newTaskTitle, "taskDescription": this.state.newTaskDescription, "completed": false, "timeElapsed": 0}
    }
    this.props.addTask(newTask);

  }
  _deleteTask (targetId) {
    this.props.removeTask(targetId);
  }

  render() {

    let tasks = this.props.tasks.map((task, key) => {
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
      <NavBar />
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
                <button className="btn btn-success task-button" onClick={this._addTaskToFirebase}>Go!</button>
            </form>
          </div>
        </div>
        {tasks}
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>  {
    return {
        tasks: state.tasks
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => {
          return dispatch(pushTask(task));
        },
        removeTask: (task) => {
          return dispatch(destroyTask(task));
        },
        loadTasks: () => {
          return dispatch(fetchTasks());
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
