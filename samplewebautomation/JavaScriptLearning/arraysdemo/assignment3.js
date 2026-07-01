// 3) programmatically assign the result of 6th table into an array and Read Elements from an array
// declare an array
let arr=[]
// assign Elements
let k=0;
for(let i=1;i<=10;i++){
    arr[k]=(i * 6)
    k++
}
//Read Elements
for(let x of arr){
    console.log(x);
    
}