//Named function
function resultantArray1(a,b){
    let resultant=[]
    let k=0
    for(let i=0;i<a.length;i++){
        resultant[k]=a[i]
        k++
    }

    for(let i=0;i<b.length;i++){
        resultant[k]=b[i]
        k++
    }
    // Read Elements from resultant array
    console.log(resultant);
}

x=[10,20,30]
y=[40,50,60,70]
resultantArray1(x,y)
console.log("-------------------------------");
// Anonymous function
let resultantArray2 =function(p,q){
    let resultant=[]
    let j=0
    for(let i=0;i<p.length;i++){
        resultant[j]=p[i]
        j++
    }

    for(let i=0;i<q.length;i++){
        resultant[j]=q[i]
        j=j+1
    }
    // Read Elements from resultant array
    console.log(resultant);
}

resultantArray2(new Array(100,200), new Array(300,400,500))
console.log("-------------------------------");
//Arrow function
let resultantArray3=(d,e)=>{
    let resultant=[]
    let k=0
    for(let i=0;i<d.length;i++){
        resultant[k]=d[i]
        k=k+1
    }

    for(let i=0;i<e.length;i++){
        resultant[k]=e[i]
        k=k+1
    }
    // Read Elements from resultant array
    console.log(resultant);
}

resultantArray3(new Array(4,5,6), new Array(9,8,7,6))