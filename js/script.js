// Task 1
// const getFactorial = function(num) {
//     if(num === 1) {
//         return 1;
//     }
//     return num * getFactorial(num - 1);
// }

const getFactorial = num => {
    return num === 1 ? 1 : num  * getFactorial(num - 1);
}

console.log(getFactorial(3));

// Task 2
// const pow = function(num, degree) {
//     if(degree === 1) {
//         return num;
//     }
//     return num * pow(num, degree - 1);
// }

const pow = (num, degree) => degree === 1 ? num : num * pow(num, degree - 1);

console.log(pow(3, 8))
console.log(Math.pow(3, 8));

// Task 3
const getSum = (a, b) => a === 0 ? b : getSum(a - 1, b + 1);
console.log(getSum(36, 18))