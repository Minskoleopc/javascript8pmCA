// Object 

//1) Object literal 

let amol = {
    firstName:"amol",
    lastName:"rao",
    age:29,
    skills:["python","java","sql"]
}

let mayuri = {
    firstName:"mayuri",
    lastName:"rao",
    age:30,
    skills:["python3","java11","sql"]
}

// 40 objects --- 160 lines
// retrive
// console.log(amol.firstName)
// console.log(amol['firstName'])
// // udpate 
// amol['lastName'] = " drao"
// amol.lastName = "ddrao"
// // add
// amol.city = "pune"
// amol['language'] = "marathi"
// // delete 
// delete amol.city
// delete amol['lastName']
//2) function constructor
function Person(fn,ln,ag,sks){
    this.firstName = fn
    this.lastName = ln 
    this.age = ag
    this.skills = sks
}
let amolA = new  Person("amol","rao",32,["python","html","css"])
let sarika = new  Person("sarika","pansare",32,["python3","html5","css3"])
console.log(amolA)
console.log(sarika)
sarika.city = "sangamner"
console.log(sarika)

//3) Es6 class

class PersonB {
    constructor(fn,ln,age,skills){
        this.firstName = fn
        this.lastName = ln 
        this.age = age
        this.skills = skills
    }
}

let mohan = new PersonB("mohan","dani",23,["html","css"])
console.log(mohan)
mohan.firstName = "ninad"
mohan.city = "nagpur"

// Object.create()
let ramB = Object.create({})
console.log(ramB)
ramB.firstName = "ram"
ramB.lastName = "dani"
ramB.age = 23
ramB.skills = ["python","css","html"]
console.log(ramB)