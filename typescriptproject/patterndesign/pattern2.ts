/*
$  $  $  $  $
$  $  $  $  $
$  $  $  $  $

rows=3
cols=5

*/
let pattern1:string=""
let i:number=1
while(i<=3){
    let j:number=1
    while(j<=5){
        pattern1=pattern1+"$  "
        j++
    }
    pattern1=pattern1+"\n"
    i++
}
console.log(pattern1)