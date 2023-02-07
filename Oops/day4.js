// Es6 


class Person {
    firstName = undefined
    lastName = undefined 
    age = undefined

    display(){
        console.log(this.firstName + this.lastName)
    }
}
let amol = new Person()
amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 44
console.log(amol)
amol.display()

// program 2
// contructor 
class PersonB {
    constructor(firstName,lastName ,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    display(){
       console.log(this.firstName + this.lastName)
    }
}

let amolC = new PersonB("amol","rao",34)
console.log(amolC)
amolC.display()

// program 3
// setting the value using set method and get


class PersonE {
    setFirstName(fn){
        this.firstName = fn
    }
    setLastName(ln){
        this.lastName = ln
    }
    setLastAge(ag){
        this.age = ag
    }

    getFirstName(){
        return this.firstName
    }
    getLastName(){
        return this.lastName
    }
    getLastAge(){
        return this.age
    }
}

let amolG = new PersonE()
console.log(amolG)
amolG.setFirstName('amolr')
amolG.setLastName('rao')
amolG.setLastAge(34)
console.log(amolG)

console.log(amolG.getFirstName())
console.log(amolG.getLastAge())
console.log(amolG.getLastName())












