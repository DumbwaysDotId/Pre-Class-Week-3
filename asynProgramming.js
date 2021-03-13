// console.log("Hello")
// setTimeout(() => {console.log("hello2")}, 10000)
// setTimeout(() => {console.log("hello3")}, 3000)


// function f1(){
//     console.log('f1 Done')
// }

// function f2(){
//     setTimeout(
//         function() {
//             console.log('f2 Done')
//         }, 5000
//     )
// }

// function f3(){
//     console.log('f3 Done')
// }

// function f4(){
//     console.log('f4 Done')
// }


// f1()
// f2(f3(f4))

// function callbackHell(){
//     setTimeout(function() {
//         console.log('1. First thing setting up second thing');
//             setTimeout(function() {
//                 console.log('2. Second thing setting up third thing');
//                     setTimeout(function() {
//                         console.log('3. Third thing setting up first thing');
//                     },2000 )
//             },6000)
//     }, 1000)
// }


// callbackHell()

// fetch("https://jsonplaceholder.typicode.com/todos/30")
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(data){
//         console.log(data)
//     })

//     .catch(function errorValue(response){
//         console.log(response)
//     })


// const count = false

// let countValue = new Promise(function(resolve, reject) {
//     // resolve("Promise resolver");
//     reject("Promise Reject")
// })

// countValue.then(
//     function successValue(result) {
//         console.log(result)
//     }
// )
// .then(
//     function successValue(){
//         console.log("You can call multiple function this way")
//     }
// )

// .catch(function errro(result){
//     console.log(result + " 404")
// })

// let countValue = new Promise(function(resolve, reject) {
//     if (count){
//         resolve("There is a count value")
//     }else{
//         reject("There is no count value")
//     }
// })

// console.log(countValue)

// let promise = new Promise(function(resolver, reject){
//     //do something ?
// })



// const doFetch = (url) => fetch(url).then(result => result.json())
// let urls = [
//     "http://jsonplaceholder.typicode.com/todos/6",
//     "http://jsonplaceholder.typicode.com/todos/7",
//     "http://jsonplaceholder.typicode.com/todos/8",
//     "http://jsonplaceholder.typicode.com/todos/9",
// ]

// let promises = [];
// urls.map((url) =>{
//     promises.push(doFetch(url))
// })

// Promise.all(promises).then(results =>console.log(results))


// let participant1 = new Promise(resolve => setTimeout(resolve, 50, 'Participan 1'))
// let participant2 = new Promise(resolve => setTimeout(resolve, 70, 'Participan 2'))
// let participant3 = new Promise(resolve => setTimeout(resolve, 20, 'Participan 3'))
// let participant4 = new Promise(resolve => setTimeout(resolve, 30, 'Participan 4'))


// Promise.race([participant1, participant2, participant3, participant4]).then(val => console.log('Finis', val))
// .catch(err => console.log('The race was stopped because of : ', eer))


let countValue = new Promise(function (resolve, reject) {
    resolve("Promise Successed")
    // reject("Promise Reject")
})

countValue.finally(
    function greet(){
        console.log('This Code is Execured')
    }
)