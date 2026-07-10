//push function will be adding eleemnt at last
let a1=[10,20,true,"Mango",14.75]
console.log(a1);
a1.push("Orange")
console.log(a1);  // [ 10, 20, true, 'Mango', 14.75, 'Orange' ]
console.log("-------------------------------------");

// pop function will be removing element at last
let a2=["Lotus","Tulip",false,150,"Mysore"]
console.log(a2);
a2.pop()
console.log(a2);  // [ 'Lotus', 'Tulip', false, 150 ]
console.log("-------------------------------------");
// unshift function will be inserting an element at first
let a3=[30,true,false,"Mango","Lotus"]
console.log(a3);
a3.unshift(10.125)
console.log(a3);  // [ 10.125, 30, true, false, 'Mango', 'Lotus' ]
console.log("-------------------------------------");
//shift function will be removing element at first
let a4=[100,200,false,10.45,"California","Lotus"]
console.log(a4);
a4.shift()
console.log(a4); // [ 200, false, 10.45, 'California', 'Lotus' ]
console.log("-------------------------------------");
//toString()
let a5=["Mango","Sunflower",false,100,200]
console.log(a5);
console.log(a5.toString());  // Mango,Sunflower,false,100,200
