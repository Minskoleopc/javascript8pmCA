
// function constructor
// program1

function Person(fn,ln,ag){
    this.firstName = fn
    this.lastName = ln 
    this.age = ag
    this.display = function(){
        console.log(this.firstName + this.lastName)
    }
}
let chinmay1  =  new Person("chinmay","deshpande",12)
let amol1  =  new Person("amol","rao",15)

console.log(chinmay1)
console.log(amol1)

// program2
function Person(fn,ln,ag){
    this.firstName = fn
    this.lastName = ln 
    this.age = ag
}

let chinmay  =  new Person("chinmay","deshpande",12)
let amol  =  new Person("amol","rao",15)
console.log(chinmay)
console.log(amol)

Person.prototype.display = function(){
    console.log(this.firstName + this.lastName)
}
Person.prototype.country = "India"


amol.display()
chinmay.display()

console.log(amol.country)
console.log(chinmay.country)

// // every object has  __proto__ === parent.protoype
console.log(amol.__proto__ === Person.prototype)
console.log(chinmay.__proto__ === Person.prototype)
console.log(amol.hasOwnProperty('firstName'))
console.log(amol.hasOwnProperty('country'))
console.log(amol.country)

// console.log(chinmay)
// chinmay.display()