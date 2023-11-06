let numbers: number[] = [1, 2, 5, 6.7];


const newNumbers = [...numbers];
numbers.pop()

// console.log(numbers);
// console.log(newNumbers);

let sum = (...numbers: number[]) => {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

let sumOfNumber: number =  sum(1, 2, 3, 4);

console.log(sumOfNumber)