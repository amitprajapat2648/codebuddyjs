// level {1}


async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await response.json()
    return data
}

getData()