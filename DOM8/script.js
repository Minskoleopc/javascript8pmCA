let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#one')

buttonA.addEventListener('click',function(){
    let fruitName = inputText.value
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = fruitName // <li>Papaya</li>
    createButton(newLi)
    // call the button add function 
    ulList.appendChild(newLi)
    inputText.value = ''
})


ulList.addEventListener('click',function(event){
    //console.log(event.target)  ===> element 
    //console.log(event.target.tagName)  ===> tagName of element
    //console.log(event.target.className)  ====> class attribute

    if(event.target.tagName == "BUTTON"){

        if(event.target.className === "remove"){
            let li = event.target.parentElement
            let ulList = li.parentElement
            ulList.removeChild(li)
        }

        else if(event.target.className === "up"){

        }
        
        else if (event.target.className === "down"){

        }



    }



})








function createButton(li){

    let r = document.createElement('button') // <button></button>
    r.textContent = 'Remove' // <button>Remove</button>
    r.className = 'remove' // <button class = "remove"><button>
    li.appendChild(r)

    let u = document.createElement('button') 
    u.textContent = 'Up' 
    u.className = 'up' 
    li.appendChild(u)


    let d = document.createElement('button') 
    d.textContent = 'Down' 
    d.className = 'down' 
    li.appendChild(d)

}