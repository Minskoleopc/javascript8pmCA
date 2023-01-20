let buttonA = document.querySelector('#one')
let inputText = document.querySelector('input')
let ulList = document.querySelector('ul')

console.log(buttonA)
console.log(inputText)
console.log(ulList)



ulList.addEventListener('click', function (event) {
    // console.log(event.target) // element
    // console.log(event.target.tagName) // element tagName
    // console.log(event.target.className) 

    if (event.target.tagName === "BUTTON") {


        console.log(event.target.className)
        if (event.target.className === "remove") {
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }
        else if (event.target.className === "up") {
            let li = event.target.parentElement
            console.log(li)
            let ul = li.parentElement
            let prev = li.previousElementSibling
            console.log(prev)
            if(prev){
                ul.insertBefore(li,prev)
            }

        }
        else if(event.target.className === "down"){
            let li = event.target.parentElement
            console.log(li)
            let ul = li.parentElement
            let next = li.nextElementSibling
            console.log(next)
            if(next){
                ul.insertBefore(next,li)
            }
        }
    }
})







buttonA.addEventListener('click', function () {
    let text = inputText.value
    let newLi = document.createElement('li')
    newLi.textContent = text
    // add buttons 
    CreateButton(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""

})

function CreateButton(li) {

    let r = document.createElement('button')
    r.textContent = "Remove"
    r.className = "remove"
    li.appendChild(r)


    let u = document.createElement('button')
    u.textContent = "Up"
    u.className = "up"
    li.appendChild(u)

    let d = document.createElement('button')
    d.textContent = "Down"
    d.className = "down"
    li.appendChild(d)

}