const score=400

const balance=new Number(100);
console.log(balance);
const balancestr=new Number("100");
console.log(typeof(balancestr));//object

console.log(balance.toString());
console.log(typeof(balance.toString()))//string

console.log(balance.toFixed(2))//100.00

const otherNumber=23.0909
console.log(otherNumber.toPrecision(3))//23.1

const hundreds=10000000
console.log(hundreds.toLocaleString('en-IN'));

//----------------------------------------------------------------------

console.log(Math);
console.log(Math.abs(-4));//4
console.log(Math.round(4.6))//5
console.log(Math.ceil(4.2))//5
console.log(Math.floor(4.9))//4

console.log(Math.min(3,4,5,6,9));
console.log(Math.max(3,4,5,6,9));

console.log(Math.random());//value from 0 to 1

console.log((Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min + 1))+min);  // value from 10 to 20