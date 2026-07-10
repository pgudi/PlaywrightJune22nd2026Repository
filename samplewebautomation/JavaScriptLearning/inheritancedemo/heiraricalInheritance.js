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

class Maths3 extends Maths1{
    multiplication(a,b){
        console.log("Multiplication Result :"+(a * b));
    }
}

let o1=new Maths2()
o1.substraction(50,10)
o1.addition(50,40)

let o2=new Maths3()
o2.multiplication(15,10)
o2.addition(90,80)