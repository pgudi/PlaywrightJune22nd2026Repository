
let numbers=[2,5,4,3,1,6]

//square of each elements in array
// [4,25,16,9,1,36]

function squareNums(x){
    return x * x
}
console.log(numbers.map(squareNums));

console.log("------------------------------");
//Named Function passing as callback function
let result1=numbers.map(function squareNums1(x){
    return x * x
})
console.log(result1);
console.log("------------------------------");
//Ananymous Function passing as callback function
let result2=numbers.map(function(x){
    return x * x
})
console.log(result2);


console.log("------------------------------");
//Arrow Function passing as callback function
let result3=numbers.map((x)=>{
    return x * x
})
console.log(result3);

//*************************** Binary value of a given number ************** */
function binary(x){
    return x.toString(2)
}

console.log(numbers.map(binary));
