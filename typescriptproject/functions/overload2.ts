
function addition(x:number,y:number):string
function addition(x:number,y:number,z:number):string

function addition(x:number,y:number,z?:number):string{
    if(z!==undefined){
        return `Addition of Three Params ${x+y+z}`
    }else{
        return `Addition of Two Params ${x+y}`
    }
}

console.log(addition(10,50))
console.log(addition(10,50,20))