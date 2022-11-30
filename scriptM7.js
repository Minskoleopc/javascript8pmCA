// foor loop , while loop

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)


// for 
// for(initlization ; conditionCheck , increment/decrement){

// }

// program - print values from 1 to 5
for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
    console.log(i) //1 // 2 // 3 // 4 // 5
}

// program3
for(let i = 0 ; i <=3 ; i++){ // 1 // 2 // 3  //4
    console.log(i) // 0 1 2 3
}


// program 4
for(let i = 1 ; i <=3 ;i++){ // 2 // 3 // 4
    console.log("hello")
}

// program 5 
// table of 2
for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // -----// 20 // 22
    console.log(i) // 2 , 4  ------ 20
}
// program 6
// print(5 to 1)
for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
    console.log(i) // 5 , 4 , 3 , 2 , 1
}

// program 7
// break statement with for loop
for(let i = 1 ; i <= 5 ; i++){ //2 // 3
    if(i == 3){
        break
    }
    console.log(i) // 1 // 2
}

for(let i = 1 ; i <= 5 ; i++){  //2 // 3
    console.log(i)  // 1 // 2 // 3
    if(i == 3){
        break
    }
}