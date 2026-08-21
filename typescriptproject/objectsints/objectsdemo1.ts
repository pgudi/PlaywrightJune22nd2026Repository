let employee:object={
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

console.log(employee.bonus())
console.log(employee.commission())
console.log(employee.incentives())