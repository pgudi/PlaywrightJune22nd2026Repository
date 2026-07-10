let student={
    firstname:"Santosh",
    age:22,
    coursename:"Research & Science",
    marks:570,
}

//Read Property value
console.log(student["firstname"]);
console.log(student["coursename"]);
console.log(student.firstname);
console.log(student.coursename);
console.log("---------------");

//apply for in loop
for (let x in student){
    console.log(student[x]);
    
}
