
// lower case
let str1="WELCOME";
console.log(str1.toLowerCase());
console.log("-----------------")
//Uppercase
let str2="programming";
console.log(str2.toUpperCase());
console.log("-----------------")
//Extract one character at a time using index
let str3="JAVASCRIPT";
console.log(str3.charAt(2));
console.log("-----------------")
// Existance of teh String
let str4="Bangalore is capital city of Karantaka";
console.log(str4.startsWith("Bangalore"));
console.log(str4.endsWith("Karantaka"));
console.log(str4.includes("capital"));
console.log("-----------------")
//replace 
let str5="It is a new palace";
// if match has fond
console.log(str5.replace("is","was"));
//if match has not found
console.log(str5.replace("is123","was"));