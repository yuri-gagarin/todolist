import React from 'react';
import FaTrash from "react-icons/lib/fa/trash";
import FaCheckCircle from "react-icons/lib/fa/check-circle";

export default class Task extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "taskTitle": this.props.title,
      "taskDescription": this.props.description,
      "timeElapsed": this.props.time,
      "completed": this.props.complete
    }
  }

  //startTimer () {
  //  this.props.second = 0;
  //  this.props.minute = 0;
  //  this.props.hour = 0;
  //}

  _markCompleted() {

    const newState = Object.assign({}, this.state);
    newState.completed = true;
    this.setState(newState);

  }


  render() {
    return (
      <div className="panel panel-default task-panel">
        <div className="panel panel-body task-body">
          <h3 className="task-title">{this.props.title}</h3>
          <hr/>
          <p className="task-description">{this.props.description}</p>
          <hr/>
          <p className="timer">Time expired since start: {this.props.time}</p>
          <div className="task-status-buttons">
            <button type="button" className="btn btn-link btn-complete" onClick={this._markCompleted.bind(this)}>Complete  <span><FaCheckCircle /></span></button>
            <button type="button" className="btn btn-link btn-delete" onClick={this.props.deleteTask.bind(null, this.state)}>Delete  <span><FaTrash /></span></button>
          </div>
        </div>
      </div>
    );
  }
}
