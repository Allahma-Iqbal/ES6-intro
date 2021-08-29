const numbers = [23, 65, 100, 32, 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 67, 99);
const maxInArray = Math.max(...numbers);
// console.log(max, maxInArray);

// numbers.push(55);
// console.log(numbers);

const numbers2 = [88, ...numbers, 55];
numbers.push(55);
console.log(numbers2);