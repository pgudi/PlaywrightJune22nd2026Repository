let numbers=[2,5,4,3,1,6]

// dispaly even numbers
// [2,4,6]
//display odd numbers
//[1,3,5]
// greater than 4
// [5,6]

function evenNums(x){
    return (x % 2 ==0)
}

function oddNums(x){
    return (x % 2 ==1)
}

function greaterThan4(x){
    return (x > 4)
}
console.log(numbers.filter(evenNums));
console.log(numbers.filter(oddNums));
console.log(numbers.filter(greaterThan4));
