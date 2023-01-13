let amol = {
    firstName: "amol",
    lastName: "rao",
    lastName: ["python", "javascript", "css", "html"]
}

// your map key can be any datatype
// number string boolean array , userdefined

let mapA = new Map()
// let names = ["chinmay","sarika"]
// let na = "dani"
// properties and method

// property size
console.log(mapA)
let a1 = mapA.size
console.log(a1)

//method
// set()
mapA.set(1, 'admin')
mapA.set("firstName", 'Ramesh')
mapA.set(true, 'isMarried')
console.log(mapA)
console.log(mapA.size)

// get()
console.log(mapA.get(1))
console.log(mapA.get("firstName"))
console.log(mapA.get(true))

// delete
mapA.delete(1)
console.log(mapA)

//clear
// mapA.clear()
// console.log(mapA)

// size
// set() , get() , delete() ,clear


let mapB = new Map([
    [1, "admin"],
    [2, "customer"],
    [3, "operations"]
])

console.log(mapB)
let a = mapB.has(1)
console.log(a)
mapB.forEach(function(el,key){
    console.log(el,key)
})
// Map ---- 2 ways blank ,values
// propeties and method
// size
// clear() , delete(),has(),set(),get(),has(),forEach() 



