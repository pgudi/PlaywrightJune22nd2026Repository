num=17
let flag=0

for(let i=2;i<num;i++){
    if(num % i ==0){
        flag++;
        break;
    }
}

if(flag==0){
    console.log(num+" is a Prime Number");
}else{
    console.log(num+" is not a Prime Number");
}