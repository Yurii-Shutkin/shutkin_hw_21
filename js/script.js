// Task 1
const getFactorial = num => num === 1 ? 1 : num  * getFactorial(num - 1);
console.log(getFactorial(3));

// Task 2
const pow = (num, degree) => degree === 1 ? num : num * pow(num, degree - 1);
console.log(pow(3, 8))

console.log(Math.pow(3, 8));

// Task 3
const getSum = (a, b) => a === 0 ? b : getSum(a - 1, b + 1);
console.log(getSum(36, 18))