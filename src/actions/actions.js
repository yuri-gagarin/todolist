import { db } from "../database/database";

const taskRef = db.ref().child("tasks");

export function fetchTasks() {
  return dispatch => {
    const tasks = [];
    dispatch(requestTasks());
    taskRef.on("child_added", snap => {
      tasks.push({
          id: snap.key,
          taskTitle: snap.val().taskTitle,
          taskDescription: snap.val().taskDescription,
          timeElapsed: snap.val().timeElapsed,
          completed: snap.val().completed
      });
      dispatch(displayTasks(tasks));
    })
  }
}

export function pushTask(task) {
    return dispatch => {
      taskRef.push(task).then(() => {
        console.log("success");

      });
    }
}
export function destroyTask(task) {
    return dispatch => {
      taskRef.on("child_removed", snap => {
        dispatch(removeTask(snap.key));
      });

      taskRef.child(task).remove().then(() => {
        console.log("success");
      });

    }
}

export function markCompleted(target) {
    return {
        type: "MARK_COMPLETED",
        payload: {
            id: target,
            completed: true
        }
    }
}


function requestTasks() {
  return {
    type: "REQUEST_TASKS",
  }
}

function displayTasks(tasks) {
  return {
    type: "DISPLAY_TASKS",
    payload: tasks
  }
}

function removeTask(taskId) {
  return {
    type: "REMOVE_TASK",
    payload: taskId
  }
}
