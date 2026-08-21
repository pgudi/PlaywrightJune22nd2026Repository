
class Maths1{
   addition(x:number, y:number):void{
        console.log("Addition Result :"+(x + y))
   }
}

class Maths2 {
    substraction(x:number, y:number):void{
        console.log("Substraction Result :"+(x - y))
   }
}

class Maths3 extends Maths1, Maths2{
    division(x:number, y:number):void{
        console.log("Division Result :"+(x / y))
   }
}

let obj:Maths3=new Maths3()
obj.division(30,3)
obj.substraction(50,20)
obj.addition(15,35)