// const balance = 500;
// balance = 400;

const userName = 'this is hridoy';
const weTogether = 'my' + userName;
console.log(weTogether);

// userName= 'This is Allama';

const numbers = [45, 34, 23, 25, 43];
// numbers = [99, 154, 3]; // not allowed;

numbers.push(555);
numbers[1] = 333;

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
    sum = sum + i;
}

const student = { roll: 101, name: 'mofiz', job: 'intern' };
student.name = 'Hridoy';
// student = {name: 'Hridoy'};
