//arrays

// const myArr=[0,1,2,3,4,5,true,"hitesh"]
const myArr=[0,1,2,3,4,5]

console.log(myArr[2]);

const myHeros=["superman","batman","daredevil"]

const myArr2=new Array(1,2,3,4,5,6)
console.log(myArr2);

myArr2.push(7);
console.log("add 7 last"+myArr2);

myArr2.pop();
console.log("remove 7 "+myArr2);

myArr2.unshift(9);
console.log("add 9 first "+myArr2);

myArr2.shift()
console.log("remove first element "+myArr2);


// console.log(myArr.includes(9));//false
// console.log(myArr.indexOf(9));//-1
// console.log(myArr.indexOf(3));//3

const newArr=myArr.join();
console.log("--------------------------");
console.log(myArr);
console.log(typeof newArr);//string

//slice,splice

console.log("A ",myArr);

const myn1=myArr.slice(1,3)

console.log("B " +myn1);
console.log("A ",myArr);



const myn2=myArr.splice(1,3)

console.log("c "+myn2);

console.log("A ",myArr);

const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","flesh","batman"]

// marvelHeros.push(dcHeros)//Array inside array
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);//flesh


const combo=marvelHeros.concat(dcHeros)
console.log(combo);

const allNewHeros=[...marvelHeros,...dcHeros]
console.log(allNewHeros);

const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnotherArr=anotherArr.flat(2)//number of layer to be flat

console.log(realAnotherArr);

console.log(Array.isArray("sanjay"))//false
console.log(Array.from("sanjay"))
console.log(Array.from({name:"hitesh"}))//[]

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//[100,200,300]














