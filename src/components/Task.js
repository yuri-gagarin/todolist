import React from 'react';


export default class Task extends React.Component {

  startTimer () {
    this.props.second = 0;
    this.props.minute = 0;
    this.props.hour = 0;
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
        </div>
      </div>
    );
  }
}
