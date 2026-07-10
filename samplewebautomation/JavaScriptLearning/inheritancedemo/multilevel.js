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

class Maths3 extends Maths2{
    multiplication(a,b){
        console.log("Multiplication Result :"+(a * b));
    }
}

let obj=new Maths3()
obj.multiplication(14,10)
obj.substraction(54,24)
obj.addition(100,70)