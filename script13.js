// //            0       1      2       3
// let names = ["amol","ram", "sham","satish"]

// let q1 = names[0]
// let q2 = names[1]
// let q3 = names[2]
// let q4 = names[3]
// console.log(q4)

// // Destructure

// let [a1,a2,a3,a4] = names
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)

// // program2
// //           0         1       2          3
// let city = ["pune","nagpur","wardha","indore"]
// let [c1,c2,c3,c4] = city
// console.log(c1)
// console.log(c2)
// console.log(c3)
// console.log(c4)

// // program3
// let numbers = [[1,2,3],[4,5,6]]
// let [[a11,a22,a33], [b11,b22,b33]] = numbers
// console.log(a22)
// console.log(b22)

// // program 4

// // let info = {
// //     firstName:"chinmay",
// //     lastName:"deshpande",
// //     age:22
// // }

// // let {firstName,lastName,age} = info
// // console.log(firstName)
// // console.log(lastName)
// // console.log(age)

// // program4

// let vehicle = {
//     color:"red",
//     type:"sedane"
// }   
// // let cl = vehicle.color
// // let ty = vehicle['type']

// // console.log(cl)
// // console.log(ty)

// //let {color,type} = vehicle

// let {color:cl1,type:ty2} = vehicle
// console.log(cl1)
// console.log(ty2)

// // program 5

// // let family = {
// //     sibiling:{
// //         sister:"gauri"
// //     },
// //     parent:{
// //         mother:"kanchan",
// //         father:"shirish"
// //     }
// // }

// // let {sibiling:{sister},parent:{mother,father}} = family
// // // console.log(sibiling)
// // // console.log(parent)
// // console.log(sister)
// // console.log(mother)
// // console.log(father)

// // program 6
// let students = {
//     amol:{
//         fullName:"amol rao",
//         age:32
//     },
//     poorva:{
//         fullName:"poorva vyas",
//         age:44
//     }
// }

// let {amol:{fullName:f1,age:ag1},poorva:{fullName:f2,age:ag2}} = students
// console.log(f1)
// console.log(ag1)
// console.log(f2)
// console.log(ag2)


//##########################################################
// Destructure and Destructure
// program 1

let names = ["chinmay","poorva","sarika","ram"]

// let a1 = names[0]
// let a2 = names[1]
// let a3 = names[2]
// let a4 = names[3]

// console.log(a1)
// console.log(a2)
// console.log(a2)
// console.log(a4)

// let [a1,a2,a3,a4] = names
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)


// program 2

// let states = [["pune","nagpur"],["banglore","kolkata"]]
// let [[q1,q2],[q3,q4]] = states
// console.log(q3)
// console.log(q4)

// program 3

let info = {
    fullName:"chinmay",
    age:32
}
// let f1 = info.fullName
// let f2 = info['age']
// console.log(f1)
// console.log(f2)

// let {fullName,age} = info
// console.log(fullName)
// console.log(age)
// let {fullName:fn,age:ag} = info
// console.log(fn)
// console.log(ag)

// program4

let family = {
    siblings:{
        sister:"gauri",
        brother:"ninad"
    },
    parent:{
        father:"shirish",
        mother:"kanchan"
    }
}

let {siblings:{sister,brother},parent:{father,mother}} = family
// console.log(siblings)
// console.log(parent)
console.log(sister)
console.log(brother)
console.log(father)
console.log(mother)

// program5
let students = {
    studentOne:{
        fullName:"ninad dani",
        age:31
    },
    studentTwo:{
        fullName:"mayuri nagrare",
        age:33
    }
}

// program 6
let {studentOne:{fullName:fn,age:a1},studentTwo:{fullName:fn2,age:a2}} = students
console.log(fn2)
console.log(a2)

// program 7
let studentss = [
    {
        firstName:"chinmay deshpande",
        age:32
    },
    {
        firstName:"mayuri rao",
        age:33
    }
]
let [{firstName:f11,age:a11},{firstName:f22,age:a22}] = studentss
console.log(a11)
console.log(a22)

let info2 = {
    fullName:"chinmay deshpande",
    skills:["python","javascript"]
}

let {fullName:f33,skills:[sk1,sk2]} = info2
console.log(f33)
console.log(sk1)
console.log(sk2)