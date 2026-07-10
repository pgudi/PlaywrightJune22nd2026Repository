let radius=[3,4,1,2,5,6]

function area(radius){
    return Math.PI * radius * radius;
}

function circumference(radius){
    return 2 * Math.PI * radius
}

function diameter(radius){
    return 2 * radius
}

Array.prototype.calculate=function(formulaLogic){
    let result=[]
    for(let i=0;i<this.length;i++){
        result.push(formulaLogic(this[i]))
    }
    return result
}

console.log(radius.calculate(area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));

console.log(radius.map(area));

