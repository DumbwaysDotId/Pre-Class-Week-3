// var myObj = {name: "Abdul", profesional: "Developer"}

// console.log(myObj.name)
// console.log(myObj.profesional)
// console.log(myObj.profesional)
// console.log(myObj.name)

// function Employee(){
//   Employee.prototype.firstName = "Abdul";
//   Employee.prototype.lastName = "Malih";
//   Employee.prototype.createDate = new Date()
//   Employee.prototype.active = false;
//   Employee.prototype.fullName = function () {
//    console.log(this.firstName + " " + this.lastName)
//   }
// }

// var diaz = new Employee()
// console.log(diaz.lastName)
// console.log(diaz.createDate)


// function withConstructor(name, profesional){
//     this.name = name;
//     this.profesional = profesional;
// }

// var newConstructor = new withConstructor("Diaz", "Sifa")

// console.log(newConstructor.name)
// console.log(newConstructor.profesional)


// function User (theName, theEmail){
//     this.name = theName;
//     this.email = theEmail;
//     this.quizScores = [];
//     this.currentScore = 0;
// }

// User.prototype = {
//     constructor: User,
//     saveScore:function (theScoreToAdd){
//         this.quizScores.push(theScoreToAdd)
//     },

//     showNameandScore: function() {
//         var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
//         return this.name + " Scores:  " + scores
//     },

//     changeEmail: function(newEmail){
//         this.email = newEmail;
//         return " New Email Saved: " + this.email
//     }
// }


// firsUser = new User("Diaz", "Diaz@gmail.com");
// firsUser.changeEmail("DizaGanteng@gmail.com")
// firsUser.saveScore(80)
// firsUser.email
// firsUser.showNameandScore()

// anotheUser = new User("User 2", "User2@gmail.com")
// anotheUser.saveScore(50)
// anotheUser.showNameandScore();


// tripeUser = new User("User 3", "User3@gmail.com")
// tripeUser.saveScore(10)

// function Fruit()
// {
//     //
// }
// var newFruitFunction = new Fruit()

// console.log(newFruitFunction.constructor)


// var cars = {
//     type: "sedan",
//     merk: "Toyota"
// }

// var car = Object.create(cars);

// console.log(car.merk)

// function People(name, age){
//     this.name = name;
//     this.age = age;
// }

// People.prototype = {
//     constructor : People,
    
//     calculateAge : function(){
//         let year = 2020 - this.age;
//         return year;
//     },

//     greeting : function(){
//         let greetingMe = "helloo " + this.name;
//         return greetingMe
//     }

// }

// let Andi = new People('Andi', 19);

// console.log("Andi Object ", Andi)
// console.log("Andi Born Year ", Andi.calculateAge())
// console.log("Greeting Andi ", Andi.greeting())


// const message = function(){
//     alert("This Message is show after 10 seconds");
// }

// setTimeout(message, 10000)

// let Arr = [5,6,3,2]

// function myCallback(params){
//     return params + 1   
// }

// document.write(Arr.map(myCallback))


// setTimeout(function() {
//     alert("This Message is show after 4 seconds");
// }, 4000)


// let Arr = [5,6,4,3]
// document.write(Arr.map(function(params){return params + 1}))

//with ES6 Arrow Function
// setTimeout(() => {alert ("This is use Arrow Function")}, 4000)


//Array Map
// const bornYear = [1990, 1991, 1992, 1993]
// const convertToold = []

// for(let i = 0; i < bornYear.length; i++){
//     convertToold.push(new Date().getFullYear() - bornYear[i])
// }

// document.write(convertToold)

// const convertToold = bornYear.map(index => new Date().getFullYear() - index)

// document.write(convertToold)


// const people = [
//     {"name" : "Peter", "age" : 28},
//     {"name" : "Andi", "age" : 19},
//     {"name" : "Sabrina", "age" : 20},
//     {"name" : "Diaz", "age" : 23},
//     {"name" : "Cipto", "age" : 17},
//     {"name" : "Malih", "age" : 16},
// ]

// filter = people.filter(person => person.age <= 18)

// document.write(filter.map(person => person.name))

// const filter = []

// for(let i = 0; i < people.length; i++){
//     if (people[i].age <= 18){
//         filter.push(people[i].name)
//     }
// }

// document.write(filter)


const cart = [
    {product: "Indomie",price: 2500},
    {product: "Aqua",price: 5000},
    {product: "Ciki",price: 1000},
    {product: "Roti",price: 2000},
]

const subTotal = cart.reduce((acc, cur) => acc + cur.price, 0)
document.write('Rp ' + subTotal)
// let subTotal = 0
// for(let i = 0; i < cart.length; i++){
//     subTotal += cart[i].price
// }

// document.write('Rp ' + subTotal)