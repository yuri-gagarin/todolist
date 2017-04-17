import * as firebase from "firebase"

const db = firebase.database();
const dbRef = db.ref().child('tasks');

const tasks = [];

dbRef.on("child_added", (snapshot) => {
    tasks.push({
        id: snapshot.key,
        taskTitle: snapshot.val().taskTitle,
        taskDescription: snapshot.val().taskDescription,
        completed: snapshot.val().completed,
        createdAt: snapshot.val().createdAt
    });
});

export const taskReducer = function(state=tasks, action) {
    let newState;
    switch(action.type) {
        case "ADD_TASK":
                newState = [{
                completed: false,
                taskTitle: action.payload.title,
                taskDescription: action.payload.description,
                timeElapsed: Date.now()
            },
            ...state];
        break;
        case "DELETE_TASK":
            let taskId  = action.payload.id;
                newState = state.filter((task) => {
                return task.id != taskId;
            });
        break;

        case "MARK_COMPLETED":
                newState = state.map(task => {
                if (task.id === action.payload.id)
                {
                    return task.completed = true;
                }
                else
                {
                    return task;
                }
            });
        break;

    }
    return newState;
}