const add = (num1, num2) => num1 + num2;
const sum = add(10, 20);

const add2 = (num1, num2) => num2 - num1;
const sub = add2(10, 20);

const add3 = (num1, num2, num3) => num1 * num2 * num3;
const multiply = add3(5, 2, 3);

const tentimes = (num) => num * 10;
const total = tentimes(3);

const fiveTimes = num => num * 5;
const total2 = fiveTimes(6);

const getNames = () => 'Allahma Iqbal';
const names = getNames();

const namesOf = () => 'Jerin';
const name = namesOf();

// console.log(sum, sub, multiply, total, total2, names, name);


const doMath = (x, y) => {
    const sum = x + y;
    const sub = x - y;

    const result = sum * sub;
    const output = result * 5;
    return output;


}

const totals = doMath(12, 5);
console.log(totals);