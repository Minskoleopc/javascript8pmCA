
// selecting the element
// <h3 class = "one" id = "two" name = "nm">Head3</h3>

// css selector 

// byTagName

let headThree = document.querySelector('h3')
console.log(headThree)
// Id
let idA = document.querySelector('#two')
console.log(idA)
//Class
let ByclassName = document.querySelector(".one")
console.log(ByclassName)
// attrubute
let byAttibute = document.querySelector('h3[name = "nm"]')
console.log(byAttibute)

idA.addEventListener('click',function(){
    idA.style.color = "red"
    idA.textContent = "chinmay"
})

// <h3 class = "one" id = "two" name = "nm">Head3</h3>

// let obj = {
//     firstName:"chinmay"
// }
// console.log(obj.firstName)
// obj.firstName = "sumit"
// console.log(obj.firstName)
// console.log(idA.textContent)

// idA.textContent = "poorva"