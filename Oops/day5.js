

class GrandFather {

    firstName = "manohar"
    lastName = "deshpande"

    displayGName(){
        console.log(this.firstName + this.lastName)
    }

}

class Father extends GrandFather{
    ffirstName = "shirish"
    displayFName(){
        console.log(this.ffirstName + this.lastName)
    }

}

class Son extends Father {

    sname = "chinmay"

    displaySName(){
        console.log(this.sname + this.lastName)
    }
}

let chinmay = new Son()
console.log(chinmay.sname)
console.log(chinmay.ffirstName)
console.log(chinmay.firstName)
console.log(chinmay.lastName)

chinmay.displayGName()
chinmay.displayFName()
chinmay.displaySName()

// let shirish = new Father()
// console.log(shirish.ffirstName)
// console.log(shirish.firstName)
// console.log(shirish.lastName)
// shirish.displayGName()
// shirish.displayFName()