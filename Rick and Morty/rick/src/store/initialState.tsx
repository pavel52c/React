interface FieldState {
    history: IHistory
}

interface IHistory {
    value:any,
}

export const initialState: FieldState = {
    history: {
        value: [],
    }
}