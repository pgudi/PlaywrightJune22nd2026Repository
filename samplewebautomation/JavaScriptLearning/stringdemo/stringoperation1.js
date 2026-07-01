// How to create String object
// First Approach
let s="Welcome"
console.log(s);

//Second Approach
let str=new String("Welcome")
console.log(str);
console.log(str.toString());

//whether string is immutable in javaScript based on first approach
let s1="JavaScript"
s1.concat(" Scripting")
s1.concat(" Language")
console.log(s1);

//whether string is immutable in javaScript based on second approach
let str1=new String("Java")
str1.concat(" Programming")
str1.concat(" Language")
console.log(str1.toString());

// Yes, In javaScript String is immutable
