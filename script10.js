//            0       1     2       3
let names = ["amol","ram","sham","sachin"]
console.log(names[0])


// function addB(x,y){
//     return [1,2,3]
// }
// let q1 = addB(12,3)
// console.log(q1[1])

names = ["amol","ram","sham","sachin"]
// push()
let q2 = names.push('sameer')
console.log(q2)
console.log(names)
// unshift()
// [ 'amol', 'ram', 'sham', 'sachin', 'sameer' ]

let q3 = names.unshift("rasika")
console.log(q3)
console.log(names)

// pop()

let q4 = names.pop()
console.log(q4)
console.log(names)

// shift()
let q5 = names.shift()
console.log(q5)
console.log(names)

// program 1
//                0    1     2    3
let birthYear = [1989,1988,1987,1986]
let ages = [] // [33,34,35,36]
//[33,34,35,36]


for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2022 - birthYear[i])
    let ag = 2022 - birthYear[i]
    ages.push(ag)

}
console.log(ages)

// program 2 
//             0  1   2  3   4 5
let numbers = [12,33,44,55,66,33]
let above40 = [] // [ 44 , 55 , 66 ]
// [44,55,66]

for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    //console.log(numbers[i])
    if(numbers[i]>40){
        above40.push(numbers[i]) 
    }
}
console.log(above40)

// program 3

let marks = [11,22,33] // 66
let total = 0
for(let i = 0 ; i <marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])

    total = total + marks[i]

    //       0    +     11   ======> 11
    //      11    +     22   ======> 33
    //      33    +      33  ======> 66
}
console.log(total)


// 9 am 













// for(let i = 0 ; i < birthYear.length ; i++){
//     //console.log(i)
//     //console.log(2022 - birthYear[i])
//     let ag = 2022 - birthYear[i]
//     ages.push(ag)
// }
// console.log(ages)




