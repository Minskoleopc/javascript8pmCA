
// // push() , pop(), shift() , unshift() ,includes()

// //map() , filter() , reduce() , forEach()

// //                0    1      2   3
// let birthYear = [1989, 1990, 1991, 1992]
// let ages = []


// // program1 

// for (let i = 0; i < birthYear.length; i++) {
//     let ag = 2022 - birthYear[i]
//     ages.push(ag)
// }

// console.log(ages)
// // program2

// let q1 = birthYear.map(function (el, index, arr) {
//     //console.log(el,index,arr)
//     return 2022 - el
// })
// console.log(q1)

// let numbers = [11, 22, 33, 44]
// let q2 = numbers.map(function (el, index, arr) {
//     return el + 2
// })
// console.log(q2)


// // program 3

// let nums = [44, 66, 77, 88, 33, 44, 56]
// let above50 = [] // [66]
// // [66,77,88,56]

// for (let i = 0; i < nums.length; i++) {
//     // console.log(i)
//     // console.log(nums[i])
//     if (nums[i] > 50) {
//         above50.push(nums[i])
//     }
// }
// console.log(above50)

// // program 4
// let q3 = nums.filter(function(el,index,arr){
//     return el > 50
// })
// console.log(q3)

// // program5 
// let total = [11,22,33]
// let sum = 0

// for(let i = 0 ; i < total.length ; i++){
//     //console.log(i)
//     //console.log(total[i])
//     sum = total[i] + sum
//     //     11      +  0   =======> 11
//     //     22      + 11   =======> 33
//     //     33      + 33   =======> 66
// }
// console.log(sum)
// let q4 = total.reduce(function(acc,el,index,arr){
//     return acc + el
// },5)
// console.log(q4)

// map() , filter() , reduce()
// forEach() , find() , findIndex(), some() , every()


// map()
let numbers = [11,22,33,44,55]
let q1 = numbers.map(function(el,index,arr){
    //console.log(el,index,arr)
    return el + 2
})
console.log(q1)

// filter
let numbersB = [11,22,33,44,55,66,77,88]
let q2 = numbersB.filter(function(el,index,arr){
    return el % 2 == 0
})
console.log(q2)

// reduce
let numbersC = [11,22,33,44]
let q3 = numbersC.reduce(function(acc,el,index,arr){
    return acc + el
},0)
console.log(q3)

// forEach()
let names = ["chinmay","shirish","ravi","ram"]
let q4 = names.forEach(function(el,index,arr){
    console.log("welcome "+ el)
})
console.log(q4)

let numbersD = [11,22,33,44,55,66]
let q5 = numbersD.filter(function(el){
    return el > 30
})
console.log(q5)

// find()
let q6 = numbersD.find(function(el,index,arr){
    return el > 30
})
console.log(q6)

//findIndex
let q7 = numbersD.findIndex(function(el,index,arr){
    return el > 30
})
console.log(q7)

// some()
let numbersE = [56,77,88,99,44,33,44,55]
let q8 = numbersE.some(function(el,index,arr){
    return el > 90
})
console.log(q8)

// every()

let q9 = numbersE.every(function(el,index,arr){
    return el > 9
})
console.log(q9)


//map(), filter(), reduce() , forEach(), find(), findIndex(),some(),every()
//push() , pop() , shift()  , unshift()
//slice() , fill() , splice() , flat() , contact(), join()

//            0        1           2        3         4
let nameA = ["pune","banglore","kolkalta","jaipur","kolhapur"]
//             -5       -4         -3         -2         -1
//nameA.slice(startIndex,endIndex)
console.log(nameA.slice(2))
console.log(nameA.slice(1,4))
console.log(nameA.slice(3))
console.log(nameA.slice(-4))
console.log(nameA.slice(1,-1))
console.log(nameA.slice(-5,4))
console.log(nameA.slice(-1,-4))


//  splice()

//               0         1          2          3
let country = ["india","australia","pakistan","bangladesh"]
// country.pop()
// console.log(country)
// country.shift()
// console.log(country)

//country.splice(startPositionIndex,numberOfElementToBeDeleted)

// country.splice(1,2)
// console.log(country)

// country.splice(2,1)
// console.log(country)
country.splice(2,2,"cuba","spain")
console.log(country)


//concat()

let numA = [33,44,55]
let numB = [66,77,88]

let q11 =numA.concat(numB)
console.log(q11)

let q22 = numB.concat(numA)
console.log(q22)


// flat()
//            0              1           2
//          0   1  2     0   1  2    0   1  2
let num = [[33,44,55] , [55,66,77] ,[88,99,100]]
console.log(num[2][1])
console.log(num[1][1])
let r2 = num.flat()
console.log(r2)

//fill()
//            0      1    2      3    4    5    6
let grades = ['A' , 'B' , 'C' , 'B', 'A', 'C ','A']
let q55 = grades.fill('invalid',1,5)
//let q44 = grades.fill('invalid',1)
console.log(q55)

















