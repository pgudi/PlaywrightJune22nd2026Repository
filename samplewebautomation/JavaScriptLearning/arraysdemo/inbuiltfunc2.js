const { log } = require("console");

// at function will be providing element based on index
let b1=[10,20,30,"Apple","Lotus",100.45]
console.log(b1);
console.log(b1.at(3));  // Apple

console.log("----------------------------------");
// concat function combines two arrays and provides a result array
let b2=[10,20,30]
let b3=["Apple","Mango","Orange"]
let result=b2.concat(b3)
console.log(result);// [ 10, 20, 30, 'Apple', 'Mango', 'Orange' ]
console.log("----------------------------------");
//slice function slices elements based on start end end position
let b4=[40,10,true,"Cosmos","Tulip",false, 100.55,"Lotus"]
console.log(b4);
console.log(b4.slice(3,6)); // [ 'Cosmos', 'Tulip', false ]
console.log("----------------------------------");
// indexOf function provides index based on element
let b5=[10,20,30,40,50,60];
console.log(b5);
console.log(b5.indexOf(40));  // 3
console.log("----------------------------------");
//includes function verifies existance of an element
let b6=["Mysore","Bangalore","Kolar","Hassan","Delhi"]
console.log(b6);
console.log(b6.includes("Hassan")); // true
console.log("----------------------------------");
//join function 
let b7=["Mango","apple",10,20,true,12.55]
console.log(b7);
console.log(b7.join("#")); // Mango#apple#10#20#true#12.55
console.log(b7.join(" ")); // Mango apple 10 20 true 12.55
console.log("----------------------------------");
//lastIndexOf function
let b8=[10,20,"Apple","Rose","Lilly",true,"Mango"]
console.log(b8);
console.log(b8.lastIndexOf("Lilly")); // 4
console.log("----------------------------------");
// splice function
let b9=[10,20,"Apple","Rose","Lilly",true,"Mango"]
console.log(b9);
console.log(b9.splice(2,3));  // [ 'Apple', 'Rose', 'Lilly' ]
console.log(b9);  // [ 10, 20, true, 'Mango' ]
console.log("----------------------------------");
// update Element
let x=[10,"Mango","Apple","Tulip",12.75]
console.log(x);
x[2]="Watermelon"
console.log(x);  // [ 10, 'Mango', 'Watermelon', 'Tulip', 12.75 ]