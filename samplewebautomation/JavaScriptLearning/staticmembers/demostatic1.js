class Student{

    showStudentName(name){
        console.log("Student Name :"+name);
    }

    static displayCourseName(courseName){
        console.log("Course Name :"+courseName);
        
    }
}

let obj=new Student()
obj.showStudentName("Santosh")
Student.displayCourseName("Science and Research")
