function showInformation(jobname:string):string
function showInformation(salary:number):string

function showInformation(info:(string | number)):string{
    if(typeof(info)==='string'){
        return `Job Name ${info}`
    }else{
        return `Salary ${info}`
    }
}

console.log(showInformation("Sales Manager"))
console.log(showInformation(23000))