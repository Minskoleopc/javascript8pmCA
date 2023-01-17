
let lisT = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#one')

console.log(lisT)
console.log(inputText)
console.log(buttonA)

buttonA.addEventListener('click', function () {
    let text = inputText.value
    let newEl = document.createElement('li') // <li></li>
    newEl.textContent = text // <li>Mango</li>
    createButton(newEl)
    lisT.appendChild(newEl)
    inputText.value = " "
})

//      <li>Apple
//         <button class = "remove">Remove</button>
//         <button class = "up">Up</button>
//         <button class = "down">Down</button>
//     </li>

function createButton(li){
    let r = document.createElement('button') // <button></button>
    r.className = "remove" // <button class = 'remove'><button>
    r.textContent = "Remove" // <button class = "remove">Remove<button>
    li.appendChild(r)

    let u = document.createElement('button') // <button></button>
    u.className = "up" // <button class ="up"><button>
    u.textContent = "Up" // <button class ="up">Up<button>
    li.appendChild(u)

    let d = document.createElement('button') // <button></button>
    d.className = "down" // <button class ="down"><button>
    d.textContent = "Down" // <button class ="down">Doen<button>
    li.appendChild(d)

}