// let inp = prompt("Enter City")
// let a = fetch("https://goweather.herokuapp.com/weather/ny")
// a.then((value1)=>{
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2)
// })
// a.catch((erraor)=>{
//     console.log(new Error + erraor)
// })


const createTodo = async (todo)=>{
let options = {
      method: "POST",
      headers: {
            "Content-type": "application/json"
      },
      body : JSON.stringify(todo)
}
let apii = await fetch('https://jsonplaceholder.typicode.com/todos/', options)
let response = await apii.json()
return response
}

let gTodo = async (id)=>{
      let response = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
      let r = await response.json()
      return r
}

const mainFunc = async ()=>{
      let todo = {
            title:'foo',
            bar:'loo',
            ide: 1,
      }
      let todos = await createTodo(todo)
      console.log(todos)
      // let a = prompt('Enter id')
      console.log(await gTodo(1))
}
mainFunc()