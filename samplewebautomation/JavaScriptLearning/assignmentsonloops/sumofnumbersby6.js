// Find count of numbers in between 1 to 100 which are divisible by 6?
/*
    step 1: print numbners 1 to 100
    step 2: extract numbers which are divisible by 6
    step 3: find count
*/
let count=0;
for(let i=1;i<=100;i++){
    if(i % 6 ==0){
        count=count+1      
    } 
}
console.log("count  Result:"+count);