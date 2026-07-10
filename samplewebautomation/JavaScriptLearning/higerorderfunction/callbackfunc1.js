function mainFunction(callback){
    console.log("It is executing The main function statement");
    callback()
    
}



mainFunction(function callbackFunction(){
    console.log("It is executing Callback Function !!!");
})
console.log("----------------------------------------");

function display(cityname, x){
    console.log("The Name of the City is :"+cityname);
    let statename="Tamilnadu"
    x(statename)
}

display("Chennai", (sname)=>{
    console.log("State Name is :"+sname); 
})
