// 2) programmatically assign odd numbers from 71 to 51 into an array and Read Elements from an array in reverse order?
//declare an array
let odd=[]

//assign elements into an array
let k=0;
for(let i=71;i>=51;i--){
    if(i % 2 ==1){
        odd[k]=i
        k+=1
    }
}
// Read Elements in Reverse
for(let i=odd.length-1;i>=0;i--){
    console.log(odd[i]);
    
}