let firstName = "chinmay"
let firstName2 = 'poorva'
let firstName3 = `sarika`

console.log(firstName)
console.log(firstName2)
console.log(firstName3)

// string + string ==> string
// number + string ==> string 
// string + number ==> string 
// number + number ==> number


// string stores the value by index

let city = "pune"

//  0    1    2    3
//  p    u    n    e

console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

// String --- Object --- Object properties and method
console.log(city.length)

// print all characters of string 

for(let i = 0 ; i < city.length ; i++){
    //console.log(i)
    console.log(city[i])
}

//Methods 

let city2 = "pune"
let q1 = city2.toUpperCase()
console.log(q1)

let city3 = "Bhopal"
let q2  = city3.toLowerCase()
console.log(q2)

// Method chaining
let city4  = "Wardha"
let l = city4.toUpperCase().toLowerCase().length
console.log(city)

let q3 = city4.includes('W')
console.log(q3)
let q4 = city4.includes('war')
console.log(q4)

// startsWith()  character and substring

let city5 = "Nagpur"
let q5 = city5.startsWith('N')
let q6 = city5.startsWith('Nag')
console.log(q5)
console.log(q6)


// endsWith() character and substring

let q7 = city5.endsWith('r')
let q8 = city5.endsWith('pur')
console.log(q7)
console.log(q8)


// indexOf()
let city6 = "jaipur"
let q9  = city6.indexOf('i')
let q10 = city6.indexOf('I')
console.log(q9)
console.log(q10)



// trim()
let city7 = " sagar "
console.log(city7.length)
let q11 = city7.trim()
console.log(q11.length)


// trimStart()

let city8 = " sagar"
console.log(city8.length)
let q12 = city8.trimStart()
console.log(q12.length)


//trimEnd()
let city9= " sagar "
console.log(city9.length) // 7
let q13  = city9.trimEnd()
console.log(q13.length)

// charAt()
// 0   1   2  3  4  5
// J   a   i  p  u  r

let city10 = "Jaipur"
let q14 = city10.charAt(5)
console.log(q14)


// Slice 
let city11 = "chandrapur"

// 0      1     2      3     4     5     6     7     8       9
// c      h     a      n     d     r     a     p     u       r    
// -10   -9    -8      -7    -6   -5    -4    -3    -2      -1
console.log(city11.slice(3))
console.log(city11.slice(-7))
console.log(city11.slice(1,-7))
console.log(city11.slice(1,7))
console.log(city11.slice(-10,-2))
console.log(city11.slice(-10,8))
console.log(city11.slice(-1,-7))

// regular expression



