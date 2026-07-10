let radius=[3,4,1,2,5,6]

let calculateArea=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(Math.PI * radius[i] * radius[i])
    }
    return result
}

console.log(calculateArea(radius));

let calcualteCircuference=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(2 * Math.PI * radius[i])
    }
    return result
}

console.log(calcualteCircuference(radius));

let calculateDiameter=function(radius){
    let result=[]
    for(let i=0;i<radius.length;i++){
        result.push(2 * radius[i])
    }
    return result
}

console.log(calculateDiameter(radius));
