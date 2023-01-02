let amol = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    skills:["python","css"]
}

let sarika = {
    firstName:"sarika",
    lastName:"pansare",
    age:45,
    skills:["python3","html5"]
}

// 100 object --- 400
// template ---- objects  

class Person {
    firstName = undefined
    lastName = undefined
    age = undefined
    skills = undefined
}

let poorva = new Person()
console.log(poorva)

// updating the value outside the class
poorva.firstName = "poorva"
poorva.lastName = "vyas"
poorva.age  = 23
poorva.skills = ["html","css","javascript"]
console.log(poorva)


// updatind or setting the value at the time of object creation

class PersonC {
    constructor(fn, ln , age,sl){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
        this.skill  = sl
    }
}

let amolA = new PersonC("amol","rao",23,["python","java","javscript"])
let sumit = new PersonC("sumit","thakur",27,["python3","java","tableau"])

console.log(amolA)
console.log(sumit)

sumit.city = "pune"
console.log(sumit)
console.log(amolA)

let names = ["chinmay","poorva"]
let firstName = "chinmay"

// Set 
// Map