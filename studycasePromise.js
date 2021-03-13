// const getTodos = () => fetch("https://jsonplaceholder.typicode.com/todos/2")

// const getAuthor = (id) => fetch("https://jsonplaceholder.typicode.com/users/" + id)


// getTodos()
// .then(todosResponse => todosResponse.json()) //Get & Return Todos Data
//     .then(todosResponse => getAuthor(todosResponse.id)//fetch Id User
//         .then(authorResponse => authorResponse.json())// Rendering Data
    
//         .then(authorResponse => {
//             return ({todosResponse, authorResponse})
//         })
//     )

//     .then(result => {
//         console.log(result.todosResponse)
//         console.log(result.authorResponse)
//     })

//     .catch(error => console.log(error))



//init API
const getTodos = () => fetch("https://jsonplaceholder.typicode.com/todos/2")

const getAuthor = (id) => fetch("https://jsonplaceholder.typicode.com/users/" + id)


//fetch API
const handleTodos = getTodos().then(res => res.json())//Get data & Return
const handleAuthor = handleTodos.then(res => getAuthor(res.id))
.then(res => res.json())//Get id Author & Return


//Exception
handleTodos.then(todosReponse => 
    handleAuthor.then(authorResponse => ({
      todosReponse, authorResponse  
    })
))

.then(result => {
    console.log(result.todosReponse)
    console.log(result.authorResponse)
})

.catch(err => console.log(err))