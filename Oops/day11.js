// class Addition {
//     add(a,b,c,d){
//         if(a != undefined && b != undefined && c != undefined && d !=undefined){
//             console.log(a+b+c+d)
//         }
//         else if(a != undefined && b != undefined && c != undefined){
//             console.log(a+b+c)
//         }
//         else if(a != undefined && b != undefined ){
//             console.log(a+b)
//         }
//     }

// }
// let a = new Addition()
// a.add(1,3,4,5)
// a.add(1,3,4)
// a.add(1,3)

// // same class , same method name , differnt signature


// Method 
// different class , same method and same signature

class Father {
    constructor(fn,ln){
        this.firstName = fn
        this.lastName  = ln
    }
    displayName(){
        console.log(this.firstName+ this.lastName)
    }
}

class Son extends Father {
    constructor(fn,ln,sn){
        super(fn,ln)
        this.sname = sn
    }
    displayName(){
        console.log(this.sname+ this.lastName)
    }

}

let chinmay = new Son("shirish","deshpande","chinmay")
console.log(chinmay.firstName)
console.log(chinmay.sname)
console.log(chinmay.lastName)
chinmay.displayName()


// let shirish = new Father("shirish","deshpande")
// shirish.displayName()

class WorldBank {
    loan(x){
        console.log("World Bank loan:"+x)
    }
    save(y){
        console.log("World Bank save:"+y)
    }
}

class  SBI extends WorldBank{

    loan(x){
        console.log("SBI loan:"+x)
        super.loan(3)
    }
    save(y){
        console.log("SBI save:"+y)
        super.loan(32)
    }
  
}

sbi1 = new SBI()
sbi1.loan(2)
sbi1.save(2)

