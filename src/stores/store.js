import { createStore } from "redux"
import { taskReducer } from "../reducers/taskReducer"

export const store = createStore(taskReducer, [{taskTitle: "a task", taskDescription: "Simple task", completed: false, createdAt: Date.now() }]);
