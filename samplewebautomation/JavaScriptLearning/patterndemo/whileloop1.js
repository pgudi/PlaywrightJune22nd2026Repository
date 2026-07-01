/*

* * * * * * *
* * * * * * *
* * * * * * *

*/

let pattern=""
let i=1
while(i<=3){
    let j=1
    while(j<=7){
        pattern=pattern+" * "
        j++
    }
    pattern=pattern+"\n"
    i++
}
console.log(pattern);
