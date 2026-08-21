
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

let obj:Maths3=new Maths3()
obj.division(50,10)
obj.substraction(60,30)
obj.addition(70,40)