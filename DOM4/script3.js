
let buttonA = document.querySelector('button')
let inputText = document.querySelector('input')
let headOne = document.querySelector('h1')

console.log(buttonA)
console.log(inputText)
console.log(headOne)

buttonA.addEventListener('click',function(){
    let cl = inputText.value // green
    headOne.style.color = cl // "green"
})