class Maths1{
    addition(x,y){
        console.log("Addition Result :"+(x + y));
    }
}

class Maths2 extends Maths1{
    substraction(a,b){
        console.log("Substraction Result :"+(a - b));
    }
}

let obj1=new Maths2()
obj1.substraction(40,20)
obj1.addition(40,30)