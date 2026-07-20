class Department{
    displayDepartmentNumber(deptno){
        console.log("Department Number :"+deptno);
    }

    displayDepartmentName(dname){
        console.log("Department Name :"+dname); 
    }

    displayDepartmentLocation(loc){
        console.log("Department Location :"+loc); 
    }
}

module.exports = {Department}