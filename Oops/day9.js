// class GrandFather {
//     constructor(fn, ln) {
//         this.firstName = fn
//         this.lastName = ln
//     }

//     displayName() {
//         console.log(this.firstName + this.lastName)
//     }

// }

// class Father extends GrandFather {
//     constructor(fn, ln, ffn) {
//         super(fn, ln)
//         this.ffn = ffn
//     }
//     displayFName(){
//         console.log(this.ffn + this.lastName)
//     }

// }

// class Son extends Father {
//     constructor(fn,ln,ffn,sfn){
//         super(fn,ln,ffn)
//         this.sname = sfn
//     }

//     displaySname(){
//         console.log(this.sname)
//     }

// }

// // scenario 4

// let chinmay = new Son("manohar","deshpabde","shirish","chinmay")
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.ffn)
// console.log(chinmay.sname)
// chinmay.displayFName()
// chinmay.displayName()
// chinmay.displaySname()


// // scenario
// // let father = new Father("manohar","deshpande","shirish")
// // console.log(father.ffirstName)
// // console.log(father.lastName)
// // console.log(father.firstName)
// // father.displayFName()
// // father.displayName()



// // scenario 2
// // class Father extends GrandFather{
// //     ffirstName = "shiris"
// //     displayFName(){
// //         console.log(this.ffirstName + this.lastName)
// //     }

// // }

// // let shirish = new Father("manohar","deshpande")
// // console.log(shirish.ffirstName)
// // console.log(shirish.firstName)
// // console.log(shirish.lastName)
// // shirish.displayFName()
// // shirish.displayName()

// //scenario 2
// // let manohar = new GrandFather("manohar","deshpande")
// // console.log(manohar.firstName)
// // console.log(manohar.lastName)
// // manohar.displayName()


class Mother {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }

    displayName(){
        console.log(this.firstName + this.lastName)
        
    }
}

class Son extends Mother {
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname = sn
    }
    displaySname() {
        console.log(this.sname + this.lastName)
    }
}


class Daughter extends Mother {
    constructor(fn,ln,dn){
        super(fn,ln)
        this.dname = dn
    }
    displayDname() {
        console.log(this.dname + this.lastName)
    }
}

let kanchan = new Mother("kanchan","deshpande")
let chinmay = new Son("kanchan","deshpande","chinmay")
let gauri = new Son("kanchan","deshpande","gauri")

kanchan.displayName()
chinmay.displaySname()
gauri.displayDname()