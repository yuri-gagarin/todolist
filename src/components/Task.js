import React from 'react';
import FaTrash from "react-icons/lib/fa/trash";
import FaCheckCircle from "react-icons/lib/fa/check-circle";

export default class Task extends React.Component {

  constructor(props) {
    super(props);
  }

  //startTimer () {
  //  this.props.second = 0;
  //  this.props.minute = 0;
  //  this.props.hour = 0;
  //}



  render() {
      if (this.props.done) {
          return (
              <div className="panel panel-default task-panel">
                <div className="panel panel-body task-body">
                  <h3 className="task-title"><strike>{this.props.title}</strike></h3>
                  <hr/>
                  <p className="task-description"><strike>{this.props.description}</strike></p>
                  <hr/>
                  <p className="timer">Time expired since start: {this.props.time}</p>
                  <div className="task-status-buttons">
                    <button type="button" className="btn btn-link btn-complete"
                            onClick={this.props.markCompleted.bind(null, this.props.id)}>Complete
                      <span><FaCheckCircle /></span></button>
                    <button type="button" className="btn btn-link btn-delete" onClick={() => {
                        this.props.deleteTask(this.props.id)
                    }}>Delete <span><FaTrash /></span></button>
                  </div>
                </div>
              </div>
          );
      }
      else {
          return (
              <div className="panel panel-default task-panel">
                <div className="panel panel-body task-body">
                  <h3 className="task-title">{this.props.title}</h3>
                  <hr/>
                  <p className="task-description">{this.props.description}</p>
                  <hr/>
                  <p className="timer">Time expired since start: {this.props.time}</p>
                  <div className="task-status-buttons">
                    <button type="button" className="btn btn-link btn-complete"
                            onClick={this.props.markCompleted.bind(null, this.props.id)}>Complete
                      <span><FaCheckCircle /></span></button>
                    <button type="button" className="btn btn-link btn-delete" onClick={() => {
                        this.props.deleteTask(this.props.id)
                    }}>Delete <span><FaTrash /></span></button>
                  </div>
                </div>
              </div>
          );
      }
  }
}
