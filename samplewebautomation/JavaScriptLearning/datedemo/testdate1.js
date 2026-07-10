let date=new Date()
console.log(date);

//Extract day value
daydate=date.getDate()
console.log(daydate); // 1 - 31
//Extract Month 
month=date.getMonth()+1
console.log(month);  // 0 -11
//Extract Year
year=date.getFullYear()
console.log(year);
// apply condition if value is single digit append 0
if(daydate<10){
    daydate="0"+daydate
}

if(month<10){
    month="0"+month
}
// print complete user defined date format
console.log(daydate+"-"+month+"-"+year);
console.log("-------------------------");

//Extract  Time value
let hour=date.getHours()
console.log(hour); // 1-24

let minute=date.getMinutes()
console.log(minute);  // 1-60

let second=date.getSeconds()
console.log(second); // 1 - 60
// apply condition if value is single digit append 0
if(hour<10){
    hour="0"+hour
}
if(minute<10){
    minute="0"+minute
}
if(second<10){
    second="0"+second
}
//Print Time Format

console.log(hour+":"+minute+":"+second);




