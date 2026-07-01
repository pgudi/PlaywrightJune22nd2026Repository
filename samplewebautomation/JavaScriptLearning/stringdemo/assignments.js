// reverse teh given string

let str="Welcome"
let rev=""
for(let i=str.length;i>=0;i--){
    let character=str.charAt(i)
    rev=rev+character
}
console.log(rev);
