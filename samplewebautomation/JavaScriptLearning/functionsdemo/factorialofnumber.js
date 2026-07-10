// Case 1: Write a function to find factorial of a given number
// Named function
function findFactorial1(num){
    let fact=1;
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of number "+num+" is "+fact);  
}
findFactorial1(5)
console.log("------------------------------------");


// Anonymous function
let findFactorial2=function(num){
    let fact=1;
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of number "+num+" is "+fact);  
}

findFactorial2(6)

console.log("------------------------------------");

// Arrow Function
let findFactorial3=(num)=>{
    let fact=1
    for(let i=num;i>=1;i--){
        fact=fact * i
    }
    console.log("Factorial of number "+num+" is "+fact);  
}

findFactorial3(7)