// comparison operator

let x = 10
console.log(x)
console.log(typeof x) // 0 , 12, 34 , 45.6 , -56

let y = true
console.log(y)
console.log(typeof y)  // either true or false


let z = "chinmay"
console.log(z)
console.log(typeof z) // 'chi', 'chinmay7' , 'chi', 'chi@' , 'chinma@3' , 123

console.log(typeof 10) // number
console.log(typeof '10') // string


// comparison operators
// < , > , <= , >= , != ,== , === ,!==
// entity < entity  ======> boolean

console.log(3 > 5)
console.log(3 < 5)
console.log(3 != 5)
console.log(3 == 5)
console.log(3 >= 5)
console.log(3 <= 5)
console.log(3 >= 5)
console.log(5 <= 5)
console.log(5 >= 5)

//-------------------------

// ==  -- value
// !=  -- value

// === --- type and value
// !== --- type and value

console.log(8 == '8')
console.log(8 === '8')
console.log(8 != '8')
console.log(8 !== '8')
console.log(89 == '89') // true
console.log(89 === 89) // true

// Logical operator

// AND &&

//True  &&  True  ===> True
//False &&  True  ===> False
//True  &&  False ===> False
//False &&  False ===> False

console.log(7 == 7 && 8 == 8)
console.log(7 != 7 && 8 == 8)
console.log(7 == 7 && 8 != 8)
console.log(7 != 7 && 8 != 8)


// OR ||

//True  ||  True  ===> True
//False ||  True  ===> True
//True  || False ===>  True
//False || False ===> False


console.log(7 == 7 || 8 == 8) // True
console.log(7 != 7 || 8 == 8) // True
console.log(7 == 7 || 8 != 8) // True
console.log(7 != 7 || 8 != 8) // False


// Not!
// True  -- False
// False -- True
console.log(!8 === 8)
console.log(!8 != '8')

// 8:30 am 
// 8:00 pm