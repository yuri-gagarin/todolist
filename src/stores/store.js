import { createStore, applyMiddleware } from "redux";
import { taskReducer } from "../reducers/taskReducer";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const logger = createLogger();

export const store = createStore(taskReducer, applyMiddleware(thunk, logger));
