
function mainFunction(callback:any):void{
    console.log("It is a main Function Statement")
    callback()
}

function showCityName():void{
    console.log("teh City name is Bangalore");
}

mainFunction(showCityName)