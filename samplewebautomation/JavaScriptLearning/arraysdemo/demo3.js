// case 3: Apply for each loop to read Elements
let arr=[]
//assign Elements
arr[0]=10
arr[1]=20
arr[2]=30
arr[3]=40
//Read Elements
for(let ele of arr){
    console.log(ele);
    
}
console.log("-----------------------");

// read Elements
for(let x in arr){
    console.log(arr[x]);
    
}