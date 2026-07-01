// Case 4: programmatically assign the numbers in between 50 to 150 which are divisible by 11 into an array and Read Elements from an array

//delcare an array
let a=[]
// Assign Elements from 50 to 150 divisible by 11
let k=0;
for(let i=50;i<=150;i++){
    if(i % 11 ==0){
        a[k]=i
        k++
    }
}

//Read Elements
for(let ele of a){
    console.log(ele);
    
}
