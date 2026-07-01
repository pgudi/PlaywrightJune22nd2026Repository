// 0  1  1  2  3  5  8  13  21  34  

let fn=0
let sn=1
console.log(fn);
console.log(sn);
for(let i=1;i<=8;i++){
    tn=fn+sn
    console.log(tn);
    fn=sn
    sn=tn
}