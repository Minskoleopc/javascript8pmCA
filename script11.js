
// push() , pop(), shift() , unshift() ,includes()

//map() , filter() , reduce() , forEach()

//                0    1      2   3
let birthYear = [1989, 1990, 1991, 1992]
let ages = []


// program1 

for (let i = 0; i < birthYear.length; i++) {
    let ag = 2022 - birthYear[i]
    ages.push(ag)
}

console.log(ages)
// program2

let q1 = birthYear.map(function (el, index, arr) {
    //console.log(el,index,arr)
    return 2022 - el
})
console.log(q1)

let numbers = [11, 22, 33, 44]
let q2 = numbers.map(function (el, index, arr) {
    return el + 2
})
console.log(q2)


// program 3

let nums = [44, 66, 77, 88, 33, 44, 56]
let above50 = [] // [66]
// [66,77,88,56]

for (let i = 0; i < nums.length; i++) {
    // console.log(i)
    // console.log(nums[i])
    if (nums[i] > 50) {
        above50.push(nums[i])
    }
}
console.log(above50)

// program 4
let q3 = nums.filter(function(el,index,arr){
    return el > 50
})
console.log(q3)

// program5 
let total = [11,22,33]
let sum = 0


for(let i = 0 ; i < total.length ; i++){
    //console.log(i)
    //console.log(total[i])
    sum = total[i] + sum
    //     11      +  0   =======> 11
    //     22      + 11   =======> 33
    //     33      + 33   =======> 66
}
console.log(sum)


let q4 = total.reduce(function(acc,el,index,arr){
    return acc + el
},5)
console.log(q4)

