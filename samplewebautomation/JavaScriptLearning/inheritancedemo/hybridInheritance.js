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

class Maths4 extends Maths3{
    division(x,y){
        let result=(x/y)
        console.log("Division Result :"+result);
    }
}

let o1=new Maths2()
o1.substraction(120,50)
o1.addition(100,300)

let o2=new Maths4()
o2.division(30,5)
o2.multiplication(10,9)
o2.addition(50,50)
