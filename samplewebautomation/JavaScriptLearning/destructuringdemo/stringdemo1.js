let str="WELCOME";

//destructing 
let [a1,a2,a3,a4]= str
console.log(a1,a2,a3,a4);

// skip character
let [b1,,b2,,b3,,b4]=str
console.log(b1,b2,b3,b4);

// REst operator
let [c1,c2,...c3]=str
console.log(c1,c2);
console.log(c3);

