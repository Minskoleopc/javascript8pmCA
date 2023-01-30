
// object literal 
// program1

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:25,
    rollNo:7
}
console.log(amol)

let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:7
}

// 40  object lines   160 

// function constructor 
// template
// function Person(fn,ln,ag,rn){
//     this.firstName = fn
//     this.lastName = ln
//     this.age = ag
//     this.rollNo = rn
// }

// let sarika = new Person("sarika","pansare",24,27)
// let abhijeet = new Person("abhijeet","botkule",27,29)
// console.log(sarika)
// console.log(abhijeet)

// es6 class
class PersonA {
    constructor(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag
        this.rollNo = rollNo
    }
}

let akshada = new PersonA("akshada","rao",23,45)
let akshay = new PersonA("akshay","rao",22,44)

console.log(akshada)
console.log(akshay)

akshay.age = 66
akshay['age'] = 77
console.log(akshay)
akshada.age = 99

// object.create method

let ram = Object.create({})
console.log(ram)
ram.firstName = "ram"
ram.lastName = "dani"
ram.age = 88
ram.rollNo = 99
console.log(ram)