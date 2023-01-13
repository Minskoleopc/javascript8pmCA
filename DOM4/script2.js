

{/* <h1>Headone</h1>
<button id = "change color">Change Color</button> */}
let headTwo = document.querySelector('h1')
console.log(headTwo)

let idNameButton = document.querySelector('#changecolor')
console.log(idNameButton)

idNameButton.addEventListener('click',function(){
    headTwo.style.color = "green"
})