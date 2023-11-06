"use strict";
let numbers = [1, 2, 5, 6.7];
const newNumbers = [...numbers];
numbers.pop();
// console.log(numbers);
// console.log(newNumbers);
let sum = (...numbers) => {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
};
let sumOfNumber = sum(1, 2, 3, 4);
console.log(sumOfNumber);
