
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

class Maths3 extends Maths1{
    division(x:number, y:number):void{
        console.log("Division Result :"+(x / y))
   }
}
let objNew2:Maths2=new Maths2()
objNew2.substraction(40,30)
objNew2.addition(50,20)

let objNew3:Maths3=new Maths3()
objNew3.division(40,10)
objNew3.addition(50,20)