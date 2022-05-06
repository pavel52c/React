
export const createCard = (value:string) => {
    return {
        type: "create",
        payload: {value},
    }
}
