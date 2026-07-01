// 1) programmatically assign even numbers from 20 to 40 into an array and Read Elements from an array?
//Declared an array
let even=[]
//Extract Even numebrs from 20 to 40 and assign into array
let k=0;
for(let i=20;i<=40;i++){
    if(i % 2 ==0){
        even[k]=i;
        k=k+1
    }
    
}
//Read Elements from even array
for(let x of even){
    console.log(x);
    
}




