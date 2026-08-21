export {}
class Maths1{
   addition(x:number, y:number):void{
        console.log("Addition Result :"+(x + y))
   }
}

class Maths2 extends Maths1{
    substraction(x:number, y:number):void{
        console.log("Substraction Result :"+(x - y))
   }
}

class Maths3 extends Maths2{
    division(x:number, y:number):void{
        console.log("Division Result :"+(x / y))
   }
}

class Maths4 extends Maths3{
    multiply(x:number, y:number):void{
        console.log("Multiplication Result :"+(x * y))
    }
}

let obj1:Maths2=new Maths2()
obj1.addition(100,40)
obj1.substraction(70,30)

let obj2:Maths4=new Maths4()
obj2.multiply(13,10)
obj2.division(80,8)
obj2.addition(60,40)