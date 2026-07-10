class Employee{

    showEmployeeName(ename){
        console.log("Employee Name is "+ename);
    }

    displayEmployeeJob(jobname){
        console.log("Employee Job is "+jobname);
    }

    showEmployeeSalary(sal){
        console.log("Employee Salary "+sal);
    }
}

let obj1=new Employee()
obj1.showEmployeeName("Santosh")
obj1.displayEmployeeJob("Sales Executive")
obj1.showEmployeeSalary(47000)