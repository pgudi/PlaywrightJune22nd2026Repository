function addition(x,y){
    let result= (x + y)
    console.log("Addition Result :"+result);
}

function multiplication(x,y){
    let result= (x * y)
    console.log("Multiplication Result :"+result);
}

function division(x,y){
    try{
        let result= (x / y)
        console.log("Division Result :"+result);
    }catch(error){
        console.log(error);
    }finally{
        console.log("It is executes always");
    }
}

multiplication(12,10)
division(25,0)
addition(40,30)