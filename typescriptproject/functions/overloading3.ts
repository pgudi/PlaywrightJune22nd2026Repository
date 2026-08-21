function showDeptDetails(dname:string):string
function showDeptDetails(deptno:number):number

function showDeptDetails(dept:(string | number)):(string | number){
    if(typeof(dept)==='string'){
        return `Depart Name ${dept}`
    }else{
        return dept
    }
}

console.log(showDeptDetails("Sales"))
console.log(showDeptDetails(20))