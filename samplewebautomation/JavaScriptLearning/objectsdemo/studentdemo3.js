let student={
    firstname:"Santosh",
    age:22,
    coursename:"Research & Science",
    marks:570,
}

//Add new property
student["cityname"]="Mysore"
student.country="India"
console.log(student);


// Modify Existing proeprty value
student["coursename"] ="Human Science"
console.log(student);

// Delete a Property
delete student.country
console.log(student);