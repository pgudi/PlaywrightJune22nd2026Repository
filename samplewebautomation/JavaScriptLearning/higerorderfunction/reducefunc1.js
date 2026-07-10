let numbers=[2,5,4,3,1,6]

let sumofelements=function(numbers){
    let sum=0
    for(let i=0;i<numbers.length;i++){
        sum =sum + numbers[i]
    }
    return sum
}

console.log(sumofelements(numbers));
console.log("--------------------------");
let sumofElements=numbers.reduce(function(acc, curr){
    return acc=acc + curr
},0)

console.log(sumofElements);
