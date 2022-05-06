import {combineReducers} from "redux";
import {historyReducer} from "./historyReduser";

export const rootReducer = combineReducers({
    history: historyReducer,
});