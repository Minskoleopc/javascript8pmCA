// //             0          1         2      3
// let names = ["chinmay","samay","poorva","rajesh"]

// // retrive 
// console.log(names[3])
// // update 
// names[2] = "rasika"
// // add
// names.push('ram')
// names.unshift('sham')
// // remove

// names.pop()
// names.shift()
// names.splice(1,2)

// // Array stores the value by index

// for(let i = 0 ; i < names.length ;i++ ){
//     console.log(names[i])
// }

// Object

let info = ["chinmay","deshpande",32,44]

let info2 = {
 //   key     : value
//   property :value
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNumber:44

}


let info3 = {
    firstName:"poorva",
    lastName:"vyas",
    age:29,
    rollNo:45
}

//console.log(info3[0])

// retrive // dot notation and bracket notation

console.log(info3.firstName)
console.log(info3['firstName'])

// update // dot notation and bracket notation

info3.firstName = "sarika"
info3['firstName'] = "rasika"
console.log(info3)
// add  // dot notation and bracket notation

info3.city = "pune"
info3['lang'] = "hindi"
console.log(info3)


// delete // dot notation and bracket notation

delete info3.city
delete info3['lang']
console.log(info3)



let vehicle = {
    color:"red",
    type:"sedane"
}

// retrive
console.log(vehicle.color)
// update
vehicle.color = "blue"
console.log(vehicle)
//add
vehicle.city = "pune"
console.log(vehicle)
// delete
delete vehicle.city
console.log(vehicle)

// bracket notation
console.log(vehicle['type'])
vehicle['type'] = "SUV"
vehicle['city'] = "pune"
delete vehicle['city']

let animal = {
    color:"red",
    eyes:2,
    legs:4

}