//https://www.youtube.com/watch?v=SHiUyM_fFME
//https://jsonplaceholder.typicode.com/

//когда код доходит до async/await то он автоматичечки его оборачивает в промисы. async используется перед вызовом функции, а оператор await перед промисом. Данный способ позволяетя избавиться от использования колбэков.

const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))

}
// delay(2000).then(() => console.log('2 sec'))

const url = 'https://jsonplaceholder.typicode.com/todos'

// function fetchTodos(){
//     console.log('Fetch todo started...')
//     return delay(2000)
//     .then(() => {
//         return fetch(url)
//     })
//     .then(response => response.json())   
// }

// fetchTodos()
//     .then(data => {
//         console.log('Data;', data)
//     })
//     .catch(e => console.error(e))

async function fetchAsyncTodos(){
    console.log('Fetch todo started...')
    try{ // используется для выявления ошибок try и catch
        await delay(2000) // выполнение промиса
        const response = await fetch(url) // здесь происходит работа оператора await и  выполнение промиса fetch
        const data = await response.json()
        console.log('Data;', data)
    } catch(e){
        console.error(e)
    } finally {
        console.log('FetchAsyncTodos finallyted.')
    }
}
fetchAsyncTodos()