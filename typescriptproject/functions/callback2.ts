function calcualte(x:number, y:number, funclogic:any):void{
    funclogic(x,y)
}

function multiplication(a:number, b:number):void{
    let result:number=(a * b)
    console.log("Multiplication Result :"+result);
}

calcualte(12,10,multiplication)