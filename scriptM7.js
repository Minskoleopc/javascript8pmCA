// // foor loop , while loop

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)


// // for 
// // for(initlization ; conditionCheck , increment/decrement){

// // }

// // program - print values from 1 to 5
// for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
//     console.log(i) //1 // 2 // 3 // 4 // 5
// }

// // program3
// for(let i = 0 ; i <=3 ; i++){ // 1 // 2 // 3  //4
//     console.log(i) // 0 1 2 3
// }


// // program 4
// for(let i = 1 ; i <=3 ;i++){ // 2 // 3 // 4
//     console.log("hello")
// }

// // program 5 
// // table of 2
// for(let i = 2 ; i <= 20 ; i = i + 2){ // 4 // -----// 20 // 22
//     console.log(i) // 2 , 4  ------ 20
// }
// // program 6
// // print(5 to 1)
// for(let i = 5 ; i >= 1 ; i--){ // 4 // 3 // 2 // 1 // 0
//     console.log(i) // 5 , 4 , 3 , 2 , 1
// }

// // program 7
// // break statement with for loop
// for(let i = 1 ; i <= 5 ; i++){ //2 // 3
//     if(i == 3){
//         break
//     }
//     console.log(i) // 1 // 2
// }

// for(let i = 1 ; i <= 5 ; i++){  //2 // 3
//     console.log(i)  // 1 // 2 // 3
//     if(i == 3){
//         break
//     }
// }


// for loop and while loop

// for(let i = 0 ; i < 3 ; i++){ // 1 // 2 // 3
//     console.log(i) // 0 , 1 , 2
// }

// for(let i = 1 ; i <= 5 ; i++){
//     console.log(i)
// }

// for(let i = 5 ; i >= 1 ; i--){
//     console.log(i)
// }

// for(let i = 2 ; i <= 20 ; i = i + 2){
//     console.log(i)
// }

// for(let i = 1 ; i <= 5 ; i++){ // 2
//     if(i == 2){
//         break
//     }
//     console.log(i) // 1
// }

// for(let i = 1 ; i <= 5 ; i++){  // 2 // 3 // 4 // 5 // 6
//     if(i == 2){
//         continue
//     }
//     console.log(i)  // 1 // 3 // 4 // 5
// }


// intialization 
// while(condition){
//     // statements
//     // increment / decrement
// }

let i1 = 1
while(i1 <= 5){
    console.log(i1) // 1 // 2 // 3 // 4 // 5
    i1 ++ // 2 // 3 // 4 // 5 // 6
}

let i2 =5
while(i2 >= 1){
    console.log(i2)
    i2 --
}

let i3 = 2
while(i3 <= 20){
    console.log(i3)
    i3 = i3 + 2
}

// break statement with while loop
let i4 = 1 
while(i4 <= 5){
    if(i4 == 3){
        break
    }
    console.log(i4) // 1 // 2

    i4 ++ // 2 // 3
}

// continue with while 
let i5 = 1
while( i5 <= 5){
    if(i5 == 3){
        i5 ++ // 4
        continue
    }
    console.log(i5) // 1 //2 // 4 // 5
    i5 ++ // 2 // 3 /// 5 // 6
}





