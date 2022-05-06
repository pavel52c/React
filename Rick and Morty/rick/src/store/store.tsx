import {createStore} from "@reduxjs/toolkit";
import {rootReducer} from "./reducers/rootReducer";
import {initialState} from "./initialState";


// @ts-ignore
const store = createStore(rootReducer, initialState)

export default store