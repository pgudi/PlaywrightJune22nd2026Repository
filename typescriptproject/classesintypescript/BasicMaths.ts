class BasicMaths1{

    addition(x:number,y:number):void{
        console.log("Addition Result :"+(x + y))
    }

    static multiplication(x:number,y:number):void{
        console.log("Multiplication Result :"+(x * y))
    }

   static substraction(x:number,y:number):void{
        console.log("Substraction Result :"+(x - y))
    }

    division(x:number,y:number):void{
        console.log("Division Result :"+(x / y))
    }
}

let maths=new BasicMaths1()
maths.addition(20,60)
maths.division(45,9)
BasicMaths1.multiplication(13,10)
BasicMaths1.substraction(90,40)
