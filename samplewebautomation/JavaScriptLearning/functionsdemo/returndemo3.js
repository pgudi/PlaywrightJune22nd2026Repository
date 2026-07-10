function isPrimeNumber(num){
    let flag=0
    for(let i=2;i<num;i++){
        if(num % i ==0){
            flag=flag+1
            break
        }
    }
    if(flag==0){
        return true
    }else{
        return false
    }
}
// verify the given number is prime
let v1=isPrimeNumber(13)
console.log(v1);
console.log("----------------------");

//Display primen umbers in between 50 to 100
for(let i=50;i<=100;i++){
    if(isPrimeNumber(i)==true){
        console.log(i);
        
    }
}
console.log("----------------------");
// Find count of Prime Numbers in between 1 to 100
let count=0
for(let i=1;i<=100;i++){
    if(isPrimeNumber(i)==true){
        count=count+1
    }
}
console.log("Count of Prime Numbers in between 1 to 100 :"+count);
console.log("----------------------");
//find sum of Prime numbers in between 1 to 50

let sum=0
for(let i=1;i<=50;i++){
    if(isPrimeNumber(i)==true){
        sum=sum+i
    }
}
console.log("Sum of Prime Numbers in BEtween 1 to 50 :"+sum);
