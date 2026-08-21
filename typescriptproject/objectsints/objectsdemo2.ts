let employee1:{
    empid:number,
    ename:string,
    jobname:string,
    salary:number,
    bonus:()=>number,
    commission:()=>number,
    incentives:()=>number
}={
    "empid":101,
    "ename":"Santosh",
    "jobname":"Sales Manager",
    "salary":40000,
    "bonus":function(){
                 return (this.salary * 5)/100
             },
    "commission":function(){
                return (this.salary * 10)/100
            },
    "incentives":function(){
                return (this.bonus() + this.commission())
            }
}

console.log(employee1.empid)
console.log(employee1.ename)
console.log(employee1.jobname)
console.log(employee1.salary)
console.log(employee1.bonus())
console.log(employee1.commission())
console.log(employee1.incentives())
