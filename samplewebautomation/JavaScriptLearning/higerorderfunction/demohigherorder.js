let radius=[3,4,1,2,5,6]


function diameter(radius){
    return 2 * radius
}

Array.prototype.calcualte=function(formula){
    let result=[]
    for(let i=0;i<this.length;i++){
        result.push(formula(this[i]))
    }
    return result
}

console.log(radius.calcualte(diameter));

console.log(radius.map(diameter));
