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

let calculate=function(radius, formulaLogic){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(formulaLogic(radius[i]))
    }
    return result
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));