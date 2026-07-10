class Maths1{
    addition(x,y){
        console.log("Addition Result :"+(x + y));
    }
}

class Maths2 {
    substraction(a,b){
        console.log("Substraction Result :"+(a - b));
    }
}

class Maths3 extends Maths1, Maths2{
    multiplication(a,b){
        console.log("Multiplication Result :"+(a * b));
    }
}

let o=new Maths3()
o.multiplication(15,10)
o.substraction(60,20)
o.addition(100,90)