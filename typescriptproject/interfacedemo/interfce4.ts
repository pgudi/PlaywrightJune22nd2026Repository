interface Book{
    bookid:number;
    bookname:string;
}

interface Library extends Book{
    libid:number;
    author:string
}

let student:Library={
    bookid:101,
    bookname:"Java Complete Referecne",
    libid:11,
    author:"Balaguru Swamy"
}

console.log(student.bookid)
console.log(student.bookname)
console.log(student.libid)
console.log(student.author)