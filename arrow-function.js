// function declear;
function add(num1, num2) {

    return num1 + num2;
}

// 1. function expression;
const add2 = function add2(num1, num2) {
    return num1 + num2
}

const total = add(10, 20);
const total2 = add2(30, 20);
console.log(total2);
console.log(total);

// function expression (anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}

const total3 = add3(20, 20);
console.log(total3);

// document.getElementById('my-btn').onclick = function handleEvent() {

// }


//3. arrow function;

const add4 = (num1, num2) => (num1 + num2);
const total4 = add4(20, 15);
console.log(total4);