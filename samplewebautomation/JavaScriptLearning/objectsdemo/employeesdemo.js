
let employee={
    empid:1001,
    ename:"Santosh",
    jobname:"Manager",
    sal:25000,
    commission:function(){
                    return (this.sal * 10)/100
                }

}

console.log(employee.empid);
console.log(employee.ename);
console.log(employee.jobname);
console.log(employee.sal);
console.log(employee.commission());