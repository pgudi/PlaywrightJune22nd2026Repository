class EmployeeNew{
    constructor();
    constructor(empid:number, ename:string)
    constructor(empid:number,ename:string,jobname:string)

    constructor(empid?:number,ename?:string,jobname?:string){
        if(empid!==undefined && ename!==undefined && jobname!==undefined){
            console.log("Employee ID :"+empid)
            console.log("Employee Name :"+ename)
            console.log("Employee JobName :"+jobname)
            console.log("------------------------")
        }else if(empid!==undefined && ename!==undefined){
            console.log("Employee ID :"+empid)
            console.log("Employee Name :"+ename)
            console.log("------------------------")
        }else{
            console.log("It is a Default / No-Args Constructor !!!")
            console.log("------------------------")
        }
    }
}

let obj1:any=new EmployeeNew()
let obj2:any=new EmployeeNew(1001,"Santosh")
let obj3:any=new EmployeeNew(1002,"Srinivasa","Analyst")