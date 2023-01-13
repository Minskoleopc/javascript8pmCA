
for(let i = 1 ; i <= 5 ; i++){
    console.log("hello")
}

// program1 

for(let i = 1 ; i <= 5 ; i++){
    console.log(i)
}

// program 2
for(let i = 5 ; i >= 1 ; i--){
    console.log(i)
}

// program  3

for(let i = 3 ; i <= 30 ; i = i + 3){
    console.log(i)
}

// program 4
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3
    console.log(i) // 5 , 4 , 3
    if(i == 3){
        break;
    }
}

for(let i = 5 ; i >= 1 ; i--){  // 4 // 3 // 2 // 1 // 0
    if(i == 3){
        continue;
    }
    console.log(i) // 5  // 4 // 2 // 1
}


// -----------------------------------------------

// intilization

// while(condition){
//     // statments 
//     // statments 


//     // increment / decrement
// }



// program 1
// intialization
let i1  = 1

// condition check
while(i1 <= 5){
    console.log("hello") // "hello" // "hello" // "hello" // "hello" // "hello"

    // increment decrement 
    i1 ++ // 2 // 3 // 4 // 5 // 6
}

// program 2
let i2 = 5
while(i2 >= 1){
    console.log(i2) // 5 // 4 // 3 // 2 // 1
    i2 -- // 4 // 3 // 2 // 1 // 0
}


// program 3
let i3 = 1
while(i3 <= 10){
    console.log(i3)
    i3 ++
}

// program 4
let i4 = 2
while(i4 <= 20){
    console.log(i4)
    i4 = i4 + 2
}

// program5 
// break statement with while 


let i5 = 1
while(i5 <= 5){
    console.log(i5) // 1 // 2 // 3
    if(i5 == 3){
        break;
    }
    i5 ++ // 2 // 3
}

let i6 = 1
while(i6 <= 5){
    if(i6 == 3){
        break;
    }
    console.log(i6) //1 // 2
    i6 ++  // 2 // 3
}


// program  6
let i7 = 1
while(i7 <= 5){
    if(i7 == 2){
        i7 ++ // 3
        continue;
    }
    console.log(i7)  // 1 , 3 , 4 , 5
    i7 ++  // 2 // 4 // 5 // 6
}


