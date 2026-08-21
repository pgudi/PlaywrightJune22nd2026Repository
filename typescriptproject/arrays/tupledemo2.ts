//declare department tuple

let dept:[number,string,string][]=[
    [10,"Accounting","New York"],
    [20,"Sales","Boston"],
    [30,"Research","California"]
]
console.log("-------------------")
//display Tuple
console.log(dept)

// Print Each Index wise
console.log(dept[0])
console.log(dept[1])
console.log(dept[2])
console.log("-------------------")
console.log(dept[0][0])
console.log(dept[0][1])
console.log(dept[0][2])
console.log("-------------------")
// Using for loop
for(let i=0;i<dept.length;i++){
    for(let j=0;j<dept[i].length;j++){
        console.log(dept[i][j])
    }
}