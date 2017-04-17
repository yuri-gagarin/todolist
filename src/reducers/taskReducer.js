import * as firebase from "firebase"

export const taskReducer = function(state=[], action) {
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