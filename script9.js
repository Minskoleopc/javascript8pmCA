// for 
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

for (let i = 3; i <= 30; i = i + 3) {
    console.log(i)
}

for (let i = 5; i > -1; i--) {
    console.log(i)
}

for (let i = 1; i <= 5; i++) {
    console.log("hello")
}


for (let i = 1; i <= 5; i++) {
    if (i == 2) {
        break
    }
    console.log(i)
}

for (let i = 1; i <= 5; i++) {
    console.log(i)
    if (i == 2) {
        break
    }

}


for (let i = 1; i <= 5; i++) {
    if (i == 2) {
        continue
    }
    console.log(i)
}


// -----------------
let i1 = -1
while (i1 <= 4) {
    console.log(i1) // -1,0,1
    i1++ // 0
}


let i11 = 5
while (i11 >= 1) {
    console.log(i11)
    i11--
}



let i2 = 5
while (i2 >= 1) {
    console.log(i11)
    if (i2 == 3) {
        break
    }
    i--
}


let i3 = 5
while (i3 >= 1) {
    if (i3 == 3) {
        i3 -- // 2
        continue
    }
    console.log(i3) // 5 // 4 // 2 // 1
    i3-- // 4 // 3 // 1 // 0
}
















