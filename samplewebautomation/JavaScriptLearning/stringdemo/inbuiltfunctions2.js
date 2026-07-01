//from left to right, it provides the position of char or string
let str1="It is a big city, it is a big city"
console.log(str1.indexOf("is"));
console.log(str1.indexOf("is",4));
console.log("------------------------------");
// from right to left, it provides teh position if char or string
let str2="It is a big city, it is a big city"
console.log(str2.lastIndexOf("is"));
console.log("------------------------------");
// conculsion
let str3="ABCDEF"
console.log(str3.indexOf("F"));
console.log(str3.lastIndexOf("F"));
console.log("------------------------------");
//compare Strings
let str4="JAVASCRIPT";
let str5="JAVASCRIPT";
console.log(str4.localeCompare(str5));
console.log("------------------------------");
// substring -> to extract substring from teh given string
let str6="Programming";
console.log(str6.substring(3));  // based on position
console.log(str6.substring(3,7));




