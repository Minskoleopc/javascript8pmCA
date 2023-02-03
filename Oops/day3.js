
// // // function constructor
// // // program1

// // function Person(fn,ln,ag){
// //     this.firstName = fn
// //     this.lastName = ln 
// //     this.age = ag
// //     this.display = function(){
// //         console.log(this.firstName + this.lastName)
// //     }
// // }
// // let chinmay1  =  new Person("chinmay","deshpande",12)
// // let amol1  =  new Person("amol","rao",15)

// // console.log(chinmay1)
// // console.log(amol1)

// // // program2
// // function Person(fn,ln,ag){
// //     this.firstName = fn
// //     this.lastName = ln 
// //     this.age = ag
// // }

// // let chinmay  =  new Person("chinmay","deshpande",12)
// // let amol  =  new Person("amol","rao",15)
// // console.log(chinmay)
// // console.log(amol)

// // Person.prototype.display = function(){
// //     console.log(this.firstName + this.lastName)
// // }
// // Person.prototype.country = "India"


// // amol.display()
// // chinmay.display()

// // console.log(amol.country)
// // console.log(chinmay.country)

// // // // every object has  __proto__ === parent.protoype
// // console.log(amol.__proto__ === Person.prototype)
// // console.log(chinmay.__proto__ === Person.prototype)
// // console.log(amol.hasOwnProperty('firstName'))
// // console.log(amol.hasOwnProperty('country'))
// // console.log(amol.country)

// // // console.log(chinmay)
// // // chinmay.display()


// function Person(firstName,lastName,age,rollNo){
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.rollNo = rollNo
//     // this.display = function(){
//     //     console.log(this.firstName + this.lastName)
//     // }
// }

// let amol = new Person("amol","rao",23,44)
// let chinmay = new Person("chinmay","deshpande",23,44)
// console.log(amol)
// console.log(chinmay)

// Person.prototype.display = function(){
//     console.log(this.firstName + this.lastName)
// }
// Person.prototype.country = "India"

// amol.display()
// chinmay.display()

// console.log(amol.country)
// console.log(chinmay.country)

// // Every object has __proto__ === Person.protype

// console.log(amol.__proto__ === Person.prototype)
// console.log(chinmay.__proto__ === Person.prototype)

// console.log(amol.hasOwnProperty('country'))
// console.log(amol.hasOwnProperty('firstName'))


// // Array 
// let names = ["chinmay","ram","sarika"]
// console.log(names.__proto__ === Array.prototype)
// console.log(names)
// names.reverse()


class Person4 {
    constructor(fn,ln,ag,rollno){
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollno =rollno
        // this.display = function(){
        //     console.log(this.firstName + this.lastName)
        // }
    }
    display(){
        console.log(this.firstName + this.lastName)
    }

}

let m = new Person4("hemant","sharma",23,899)
let n = new Person4("hemant2","sharma2",233,899)

console.log(m)
console.log(n)
m.display()
n.display()


let obj = {
    init:function(fn,ln,ag,rollNo){
        this.firstName = fn
        this.lastName = ln 
        this.ag = ag
        this.rollNo = rollNo
    }
    ,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
    
}

let rrr = Object.create(obj)
console.log(rrr)
rrr.init("rr","rao",33,44)
rrr.display()