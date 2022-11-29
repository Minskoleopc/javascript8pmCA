// let and const
let x = 10
console.log(x)
x = 200
console.log(x)

const score = 0
console.log(score)
//score = 34

// Arithmetic operation

// Addition     -   +
// Subtraction  -   -
// Multiplication-  *
// Division      -  /
// Modulus       -  %

console.log(21 % 5) // 1
console.log(22 % 7) //1

let x1 = 10
let y1 = 5

console.log(x1 + y1) //15
console.log(x1 - y1) // 5
console.log(x1 * y1) // 50
console.log(x1 / y1) // 2
console.log(x1 % y1) // 0

let s = 8
let t = 4

console.log(s + t)
console.log(s - t)
console.log(s * t)
console.log(s / t)
console.log(s % t)

// DRY --- Donot repeat yourself
// 1 pair - 5 lines
// 10     - 50 lines 

function Calculator(x,y){
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
Calculator(12,4)
Calculator(6,3)























