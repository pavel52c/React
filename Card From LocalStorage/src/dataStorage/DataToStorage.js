let Data = [
    {
        title: "Head-1",
        description: "Description 1",
        created: "01.01.2022"
    },
    {
        title: "Head-2",
        description: "Description 2",
        created: "02.01.2022"
    },
    {
        title: "Head-3",
        description: "Description 3",
        created: "03.01.2022"
    },
    {
        title: "Head-4",
        description: "Description 4",
        created: "04.01.2022"
    },
    {
        title: "Head-5",
        description: "Description 5",
        created: "05.01.2022"
    },
    {
        title: "Head-6",
        description: "Description 6",
        created: "06.01.2022"
    },
    {
        title: "Head-7",
        description: "Description 7",
        created: "06.01.2022"
    }
]
function DataToStorage(Data) {
    for (let i = 0; i < Data.length; i++) {
        localStorage.setItem(Data[i].title, JSON.stringify(Data[i]))
    }
}

export {DataToStorage, Data}
