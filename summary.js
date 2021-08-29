let priyoPerson = 'koolsom begum';

priyoPerson = 'momotaj begum';

const hubby = 'akber the great';

// default parameter
function getName(first, last = 'chowdhury') {

    return first + ' ' + last;
}

// template string;
const myPeople = `my lovely person is ${hubby} and his full name is ${getName('Akber')}. My name is ${priyoPerson} `

// console.log(myPeople);

// arrow function;

const getName2 = (first, last) => first + ' ' + last;
const fivetimes = x => x * 5;

const bigArrowFunc = (x, y, z) => {
    const sum = x + y;
    const sub = y - z;
    const multiply = z * 10;
    const total = sum + sub + multiply;

    return total;
}

const totalNumber = bigArrowFunc(20, 20, 40);
console.log(totalNumber);

const numbers = [202, 39, 3482];
const min = Math.min(...numbers);
console.log(min);