
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



// join()

let info = ["chinmay","deshpande",7709192441]
let q21 = info.join('-') // "chinmay-deshpande-7709192441"
let q222 = info.join('@')
let q223 = info.join('&')
let q224 = info.join(' ')
console.log(q21)
console.log(typeof q21)
console.log(q222)
console.log(q223)
console.log(q224)

// includes()
let city = ["pune","mumbai","banglore","kolkata","chennai"]
let q225 = city.includes('Pune')
console.log(q225)

// sort()
let q226 = city.sort()
console.log(q226)

// reverse()
let q227 = city.reverse()
console.log(q227)
// at
//   0          1         2           3         4 
//[ 'pune', 'mumbai', 'kolkata', 'chennai', 'banglore' ]
let q228 = city.at(2)
console.log(q228)

// indexOf()
let q229 = city.indexOf('chennai')
let q230 = city.indexOf('chenna')
console.log(q229)
console.log(q230)

//---------------------------------------------------------------------
//              0         1         2      3       4
let names2 = ["poorva","sameer","sanket","sham","satish"]
names2.push("pooja")
names2.unshift("pooja")
names2.pop()
names2.shift()

let numBa = [11,33,44,55,66]
numBa.map(function(el,index,arr){
    return el + 2
})
numBa.filter(function(el,index,arr){
    return el > 50
})
numBa.reduce(function(acc,el,index,arr){
    return el + acc
},0)

numBa.forEach(function(el,index,arr){
    console.log(el * 2)
})

numBa.find(function(el,index,arr){
    return el > 50
})

numBa.findIndex(function(el,index,arr){
    return el > 50
})

// [11,33,44,55,66]
numBa.every(function(el,index,arr){
    return el > 80
})
numBa.some(function(el,index,arr){
    return el > 60
})

// map() , filter() , some() , every() , find() , findIndex()
// reduce() , forEach()

//            0  1 2   3  4  5
let numBaa =[11,22,33,44,55,66] 
//           -6 -5 -4 -3 -2  -1

//numBaa.slice(startIndex,endIndex)
// numBaa.slice(1)
// numBaa.slice(-5)
// numBaa.slice(1,5)

//numBaa.splice(2,1)
//numBaa.splice(2,2)
//numBaa.splice(3,2,77,99)

let a11 = [11,22,33]
let a22 = [88,98,99]
let q1332 = a11.concat(a22)
console.log(q1332)

let a12 = [[2,3,4],[5,6,7]]
a12.flat(a12)

let a13 = [44,55,66,677,88,999]
a13.fill(undefined,1)
a13.fill(undefined,1,4)



