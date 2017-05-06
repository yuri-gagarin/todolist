import { createStore, applyMiddleware, combineReducers } from "redux";
import { taskReducer } from "../reducers/taskReducer";
import { createLogger } from "redux-logger";
import { routerReducer } from "react-router-redux";
import thunk from "redux-thunk";

const logger = createLogger();

export const store = createStore(combineReducers({tasks: taskReducer, routing: routerReducer}), applyMiddleware(thunk, logger));
