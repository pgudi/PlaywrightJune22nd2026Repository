
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

let objNew1:Maths2=new Maths2()
objNew1.substraction(40,30)
objNew1.addition(50,20)