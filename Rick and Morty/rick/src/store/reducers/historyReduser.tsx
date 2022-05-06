import {initialState} from "../initialState";

interface IAction {
    type: string,
    value: string,
}

export const historyReducer = (state = initialState, action:IAction) => {
    switch (action.type) {
        case "create": return {value: action.value}
        default: return state
    }
}