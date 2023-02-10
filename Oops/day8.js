// // without constructor 

// class GrandFather {
//     firstName = "manohar"
//     lastName = "deshpande"
//     displayGrandFather() {
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Father extends GrandFather {

//     ffirstName = "shirish"
//     displayFatherName() {
//         console.log(this.ffirstName + this.lastName)
//     }
// }


// class Son extends Father {
//     sname = "chinmay"
//     displaySname(){
//         console.log(this.sname + this.lastName)
//     }
// }

// let chinmay = new Son()

// console.log(chinmay.sname)
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.ffirstName)

// chinmay.displaySname()
// chinmay.displayFatherName()
// chinmay.displayGrandFather()


// Program2
// class GrandFather {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }
//     displayGName(){
//         //console.log(this.firstName + this.lastName)
//         return this.firstName + this.lastName
//     }
// }

// class Father extends GrandFather  {
//     ffirstName = "shirish"
//     displayFName(){
//         console.log(this.ffirstName + this.lastName)
//     }
// }

// let  shirish = new Father("manohar","deshpande")
// console.log(shirish.ffirstName)
// console.log(shirish.firstName)
// console.log(shirish.lastName)
// shirish.displayFName()
// let a = shirish.displayGName()
// console.log(a)


class GrandFather {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName =ln
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }

}

class Father extends GrandFather {

    constructor(fn,ln,ffn){
        super(fn,ln)
        this.ffirstName = ffn
    }

    displayFName(){
        console.log(this.ffirstName + this.lastName)
    }
}

let shirish = new Father("manohar","deshpande","shirish")
console.log(shirish.ffirstName)
console.log(shirish.firstName)
console.log(shirish.lastName)

shirish.displayFName()
shirish.displayGName()










// let shirish = new Father()
// console.log(shirish.ffirstName)
// console.log(shirish.firstName)
// console.log(shirish.lastName)
// shirish.displayGrandFather()
// shirish.displayFatherName()










// only contructor for parent




// constructor for parent and child  (calling of parent method)




// single inheritance 