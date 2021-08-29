const priya = 'Asif Akbar';
const meye = "Meye tumi ki dhukko chino";
const kobita = `kobita tumi sopno charini`;

const multiline = 'this is my first line.\n' + 'this is my second line.\n' + 'this is my third line';

const multiLineNew = `
this is multiline
this is my first line.
this is my second line.
this is my third line
`;


const friends = ['rofiq', 'shofiq', 'mofiz', 'nokib'];

const count = 5;
const old = ' <h3 class="friend-name">Friend-5</h3>'
const old2 = ' <h3 class="friend-name">Friend-' + count + '</h3>'
const new1 = `<h3 class="friend-name">Friend-${count}</h3>`

const first = 'mamun';
const last = 'mia';

const fullOld = 'this person name is : ' + first + ' ' + last;

const fullNew = `this person name is: ${first} ${last}. Has money ${friends.lenght * 500}. He lives in dhaka.`;

console.log(fullNew);

// console.log(multiline);