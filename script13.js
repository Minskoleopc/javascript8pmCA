//            0       1      2       3
let names = ["amol","ram", "sham","satish"]

let q1 = names[0]
let q2 = names[1]
let q3 = names[2]
let q4 = names[3]
console.log(q4)

// Destructure

let [a1,a2,a3,a4] = names
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

// program2
//           0         1       2          3
let city = ["pune","nagpur","wardha","indore"]
let [c1,c2,c3,c4] = city
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)

// program3
let numbers = [[1,2,3],[4,5,6]]
let [[a11,a22,a33], [b11,b22,b33]] = numbers
console.log(a22)
console.log(b22)

// program 4

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     age:22
// }

// let {firstName,lastName,age} = info
// console.log(firstName)
// console.log(lastName)
// console.log(age)

// program4

let vehicle = {
    color:"red",
    type:"sedane"
}   
// let cl = vehicle.color
// let ty = vehicle['type']

// console.log(cl)
// console.log(ty)

//let {color,type} = vehicle

let {color:cl1,type:ty2} = vehicle
console.log(cl1)
console.log(ty2)

// program 5

// let family = {
//     sibiling:{
//         sister:"gauri"
//     },
//     parent:{
//         mother:"kanchan",
//         father:"shirish"
//     }
// }

// let {sibiling:{sister},parent:{mother,father}} = family
// // console.log(sibiling)
// // console.log(parent)
// console.log(sister)
// console.log(mother)
// console.log(father)

// program 6
let students = {
    amol:{
        fullName:"amol rao",
        age:32
    },
    poorva:{
        fullName:"poorva vyas",
        age:44
    }
}

let {amol:{fullName:f1,age:ag1},poorva:{fullName:f2,age:ag2}} = students
console.log(f1)
console.log(ag1)
console.log(f2)
console.log(ag2)