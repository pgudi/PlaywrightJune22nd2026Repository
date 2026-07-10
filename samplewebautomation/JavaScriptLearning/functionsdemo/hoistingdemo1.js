
//Named function
show()
function show(){
    console.log("Welcome to Hoisting Level");
}
show()

// Ananymous function
show1()  // Cannot access 'show1' before initialization
let show1=function(){
    console.log("Welcome to Hoisting Level for Ananymous function");
}
show1()

//Arrow Function
show2()  //  Cannot access 'show2' before initialization
var show2=()=>{
    console.log("Welcome to Hoisting Level for Arrow function");
}
show2()