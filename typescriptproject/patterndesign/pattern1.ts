/*
$  $  $  $  $
$  $  $  $  $
$  $  $  $  $

rows=3
cols=5

*/
let pattern:string=""

for(let i:number=1;i<=3;i++){
    for(let j:number=1;j<=5;j++){
        pattern=pattern+"$  "
    }
    pattern=pattern+"\n"
}

console.log(pattern)