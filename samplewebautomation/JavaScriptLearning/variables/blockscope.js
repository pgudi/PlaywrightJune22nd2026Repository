function display(){
    if(true){
        let a=250
        console.log(a);
    }
    //console.log(a);  // it provides error since let is a block scope
}
//display()


function display1(){
    if(true){
        const a=250
        console.log(a);
    }
   // console.log(a);  // it provides error since let is a block scope
}
display1()