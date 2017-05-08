
const tasks = [{taskTitle: "task", taskDescription: "Description" }];

export const taskReducer = function(state=[], action) {
    switch(action.type) {

        case "DISPLAY_TASKS":
            console.log(action.payload);
            return [...action.payload];
        break;

        case "REQUEST_TASKS":
          return state;
        break;

        case "COMPLETE_REQUEST":
          return [...state.taskArray];
        break;

        case "ADD_TASK":
            return [
              {
                completed: false,
                taskTitle: action.payload.title,
                taskDescription: action.payload.description,
                timeElapsed: Date.now()
              },
            ...state];
        break;

        case "REMOVE_TASK":
            let taskId  = action.payload;
            return state.filter((task) => {
                return task.id != taskId;
            });

        break;

        case "MARK_COMPLETED":
                return state.map(task => {
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

        default:
            return state;


    }
}
