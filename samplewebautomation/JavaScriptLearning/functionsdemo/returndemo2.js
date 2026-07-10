function getIntegrArray(){
    let a=[]
    for(let i=11;i<=20;i++){
        a.push(i)
    }
    return a
}
let b=getIntegrArray()
console.log(b);
console.log("---------------------------");

// display First half of the Elements
for(let i=0;i<b.length/2;i++){
    console.log(b[i]);
    
}
console.log("---------------------------");
console.log("---------------------------");

// display Second half of the Elements
for(let i=b.length/2;i<b.length;i++){
    console.log(b[i]);
    
}
console.log("---------------------------");

// sum of all Eleemnts
let sum=0
for(let i=0;i<b.length;i++){
    sum=sum+b[i]
    
}
console.log("Sum of All Elements :"+sum);

console.log("---------------------------");