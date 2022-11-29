// for loop

// Intialization// ConditionCheck// Increment/decrement
for (let i = 0; i < 5; i++) {
    console.log(i) // statments
}


// program 1
for (let y = 1; y <= 3; y++) { // 2 // 3 // 4
    console.log(y) // 1 // 2 // 3
    console.log('hello')
}

// program 2
// print  0 to 4
for(let i = 0 ; i < 5 ; i++){ // 1 // 2 // 3 // 4 // 5
    console.log(i) // 0,1,2,3,4
}
// program 3
// print 1 -10
for(let i = 1 ; i <= 10 ; i++){
    console.log(i)
}
// program 4
// table of 2
for(let i = 2 ; i <= 20 ;i = i + 2){
     console.log(i)
}
// program 5
for(let i = 1 ; i <=3 ; i++){
    console.log('hello')
}

// program 6

for(let i = 10 ; i >= 1; i--){ // 9 --------------1 , 0
    console.log(i)  // 10------------1
}

for(let i = 5 ; i >=1 ; i--){
    console.log(i)
}

console.log('---------------------')
// program 7
// break statement with for
for(let i = 1 ; i <=5 ; i++){ // 2 // 3
    if(i == 3){
        break;
    }
    console.log(i) // 1 , 2
}

for(let i = 1 ; i <=5 ; i++){  // 2 // 3
    console.log(i) // 1 // 2 // 3
    if(i == 3){
        break;
    }

}

// program7
// continue statement with for

for(let i = 0 ; i <= 5; i++){ //1 // 2 // 3 // 4 // 5 // 6
    if(i == 3){
        continue
    }
    console.log(i)  // 0 , 1 ,2 , 4 , 5
}



for(let i = 5 ; i >= 1 ; i--){ // 4 // 3
    if(i == 3){
        break
    }
    console.log(i) // 5 // 4
}

for(let i = 5 ; i >= 1 ; i--){ 
    if(i == 3){
        continue
    }
    console.log(i) 
}


