// Approach 1:
let myset1=new Set([10,20,30,40,10,20,30])
console.log(myset1);

//Approach 2:
let myset2=new Set()
myset2.add("apple")
myset2.add("Mango")
myset2.add("Orage")
myset2.add("Mango")
myset2.add("Orage")
myset2.add("apple")
console.log(myset2);
console.log("-----------Read Elements -----------");

//Read Elements from Set
for (let x of myset2){
    console.log(x);
    
}
console.log("----------Read Elements ------------");
//Read Elements from Set
for (let x of myset2.values()){
    console.log(x);
    
}
console.log("----------Read Elements ------------");
//Read from Set
myset2.forEach(function(x){
    console.log(x);
})

console.log("----------Delete Elements ------------");
myset2.delete("Mango")
console.log(myset2);

myset2.clear()
console.log(myset2);

console.log("----------Convert Set into an array  ------------");
let myset3=new Set([100,200,300,400,500])
let arr = [...myset3]  // without using iteration we can get eleemnts
console.log(arr); 
