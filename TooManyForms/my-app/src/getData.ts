
export const getData = async (setState: any) => {
    await fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(res => setState(res))
}