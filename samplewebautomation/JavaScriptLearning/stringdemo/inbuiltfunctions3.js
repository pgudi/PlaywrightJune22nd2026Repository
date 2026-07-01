//split -> it splits based on delimeter
let str1="Apple Mango Orange Grapes Guava"
let result=str1.split(" ")
console.log(result);
let str2="Lotus,Sunflower#Tulip,Jasmine"
let result1=str2.split(",")
console.log(result1);
// slice -> it slices the String based on start and end position
let str3="Mango Apple Banana Grapes Guava"
console.log(str3.slice(0,10));
// padding teh given String on left or right side
let str4="WELCOME"
console.log(str4.padStart(10,"#"));
console.log(str4.padEnd(10,"#"));
// repeat 
let str5="Good Morning"
console.log(str5.repeat(5));

//Trim  -> IT remove blank space on both the sides
let str6="   PLAYING   "
console.log("Before Trim opration Number of Characters :"+str6.length);
console.log("After Trim opration Result :"+str6.trim());
console.log("After Trim opration Number of Characters :"+str6.trim().length);



