function getData() {
    let Data = []
    for(let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue;
        }
        Data.push(JSON.parse(localStorage[key]))
    }
    return Data.sort((item1, item2) => item1.title[item1.title.length - 1] - item2.title[item2.title.length - 1])
}

export default getData