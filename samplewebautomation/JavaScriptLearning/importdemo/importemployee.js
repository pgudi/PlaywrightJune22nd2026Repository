
const {Employee}=require('./../exportdemo/employeedemo')

let obj=new Employee(101,"Santosh","Manager",45000)

obj.showEmployeeId()
obj.showEmployeeName()
obj.showEmployeeJob()
obj.showEmployeeSalary()