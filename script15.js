let students = [
    {
        fullName:"chinmay deshpande",
        age:32,
        skills:["python","java"],
        city:"pune"
    },
    {
        fullName:"sarika pansare",
        age:24,
        skills:["python2","java","javascript"],
        city:"sangamner"

    },
    {
        fullName:"amol rao",
        age:33,
        skills:["sql","python"],
        city:"nagpur"
    },
    {
        fullName:"poorva vyas",
        age:29,
        skills:["sql","angular","javascript"],
        city:"ujjain"
    },
    {
        fullName:"Mahesh",
        age:24,
        skills:["sql","angular","python3"],
        city:"pune"
    }
]

// name of user above 30
let q1 = students.filter(function(el){
    return  el.age > 30
})
console.log(q1)
q1.forEach(element => {
    console.log(element.fullName)
});
//--------------------------------------
students.forEach(function(el){
    if(el.age > 30){
        console.log(el.fullName)
    }
})

// program 2
// name:(number of Skills)
students.forEach(function(el){
    console.log(el.fullName,":",el.skills.length)
})

// program3 (age above 30 and python)
students.forEach(function(el){
    if(el.age > 30 && el.skills.includes('python')){
        console.log(el.fullName)
    }
})
//program 4 (python skills and pune city)

students.forEach(function(el){
    if(el.skills.includes('python') && el.city === "pune"){
        console.log(el.fullName)
    }
})

// Program 5 add country = "India"
students.forEach(function(el){
    el.country = "India"
})
console.log(students)

// program6(add Excel skills to all users)
students.forEach(function(el){
    el.skills.push('Excel')
})
console.log(students)

// program 7 (average age of all students)
let r1 = students.reduce(function(acc, el){
    return  acc + el.age
},0)
console.log(r1/students.length)