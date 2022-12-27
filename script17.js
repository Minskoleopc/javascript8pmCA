let a = "chinmay"
console.log(a)
let b = 'shirish'
console.log(b)
let c  = `deshpande`
console.log(c)

// number + number ===> number 
// string + number ===> string 
// number + string ===> string
// string + string ====> string

// let a1 = 10
// let a2 = 20
// let a3 = "hello"

// console.log(a1+a2+a3) // "30hello"
// console.log(a1+a3+a2) // "10hello20"
// console.log(a3+a1+a2) // "hello1020"


// String stores the value by index


let firstName = "chinmay"

//  0   1   2  3   4   5  6
//  c   h   i  n   m   a   y
console.log(firstName[0])
console.log(firstName[1])

// String -- object 
// Object property and method
// Method - action and return type 


let city = "pune"

// 0    1   2   3
// p    u   n   e

console.log(city[0])
// Property -- length 
console.log(city.length)


for(let i = 0 ; i < 4 ;i++){ //1 // 2 // 4 // 4
    //console.log(i) // 0 , 1 , 2, 3
    console.log(city[i])
}

//  0   1   2  3  4  5
//  n   a   g  p  u  r


let city2 = "nagpur"

for(let i = 0 ; i < city2.length ; i++){
    //console.log(i)
    console.log(city2[i])
}

// String object -- property and method 

// property 

let city3 = "mumbai"
console.log(city3.length)

// Methods

// toUpperCase()

let city4 = "Bhopal"
let c4  = city4.toUpperCase()
console.log(c4)

// toLowerCase()

let c5  = city4.toLowerCase()
console.log(c5)


//indexOF()

// 0 1 2 3 4 5
// w a r d h a
let city6 = "wardha"
let c6 = city6.indexOf('d')
console.log(c6)
let c7  = city.indexOf('H')
console.log(c7)

//includes()
let city7 = "goa"
let c8 = city7.includes('O')
console.log(c8)
// startsWith()
let city8 = "indore"
let c9 = city8.startsWith('i')
let c10 = city8.endsWith('re')
console.log(c9)
console.log(c10)


// endsWith()





