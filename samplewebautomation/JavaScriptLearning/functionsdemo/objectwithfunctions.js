let employees={
    "eid":101,
    "ename":"Santosh",
    "jobname":"Sales Manager",
    "salary":40000,
    "variablepay":100000,
    "bonus": function showBonus(){
                return (this.salary * 5)/100;
            },
    "commision":function(){
                return (this.salary * 10)/100
            },
    "getvariablepay":()=>{
                        return (this.variablepay*20)/100
                    }
};

console.log(employees);
console.log(employees.bonus());
console.log(employees.commision());
console.log(employees.getvariablepay());





