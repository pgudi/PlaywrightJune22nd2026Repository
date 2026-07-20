
let arr = [10,20,30,40,50,60]

// destructing
let [a1,a2] = arr
console.log(a1);
console.log(a2);

//skiping some Elements
let [b1,b2,,,,b3] =arr
console.log(b1,b2,b3);

//rest operator
let [c1,c2,c3,...c4] = arr
console.log(c1,c2,c3);
console.log(c4);




