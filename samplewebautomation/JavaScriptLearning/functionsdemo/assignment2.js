function joinArrays(a,b){
    let result=""
    for(let i=0;i<a.length;i++){
        result=result+a[i]+"#"
    }

    for(let i=0;i<b.length;i++){
        result=result+b[i]+"#"
    }
    return result
}

console.log(joinArrays(new Array(10,20,30), new Array(40,50,60,70)));
