let chinmay = {
    firstName:"chinmay", // ["firstNname","chinmay"]
    lastName:"deshpande",
    age:23,
    skills:["python","javascript"]
}

// console.log(Object.keys(chinmay))
// console.log(Object.values(chinmay))
// console.log(Object.entries(chinmay))

for(let k of Object.keys(chinmay)){
    console.log(k)
}

for(let k of Object.values(chinmay)){
    console.log(k)
}

for(let [key,val] of Object.entries(chinmay)){
    console.log(key,val)
}


// let names = ["chinmay","rasika","poorva"]
// for(let i = 0 ; i < names.length ; i++){
//     console.log(names[i])
// }

// for(let key in chinmay){
//     console.log(key,chinmay[key])
// }


// program 2

let amol  = {
    firstName:"amol",
    lastName:"rao",
    age:34
}

for(let key in amol){
    console.log(key,amol[key])
}

for(let x of Object.keys(amol)){
    console.log(x)
}

for(let x of Object.values(amol)){
    console.log(x)
}

for(let [k,v] of Object.entries(amol)){
    console.log(k,v)
}

// ---------------------

let mapA = new Map()

let mapB = new Map([
    [1,"admin"],
    [2,"customer"],
    [3,"new"],
])
console.log(mapB.size)

// set
mapB.set(4,'teacher')
console.log(mapB)

// get
let a = mapB.get(3)
console.log(a)

// has
let b = mapB.has(3)
console.log(b)

// clear
// mapB.clear()

// // delete
// mapB.delete(2)

// forEach

// mapB.forEach(function(v,k){
//     console.log(k,v)
// })

for(let k of mapB.keys()){
    console.log(k)
}

for(let v of mapB.values()){
    console.log(v)
}

for(let [k,v] of mapB.entries()){
    console.log(k,v)
}
















// //object 
// // retrive 
// console.log(obj.firstName)
// // add 
// obj.city = "nagpur"
// // update
// obj.firstName = "sumit"
// // delete
// delete obj.city