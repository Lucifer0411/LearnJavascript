"use Strict";  //treat all js code as newer version


//Primitive Datatypes

//7 types :String, Number, Boolean, null, undefined, Symbol, BigInt

let name="sanjay"

let age=20

let isLoggedIn=false

const score = 100
const scoreValue = 100.0
const outsideTemp=null

let userEmail;

const id=Symbol("123")
const anotherId=Symbol("123")
console.log(id);
console.log(anotherId);
console.log(anotherId==id);//false

const bigNumber=3242352533535234n//BigInt

//Reference (Non primitive)

//Array, Objects, Functions


//Array
const heros=['shaktiman','naagrajun','doga'];


//Object
const myInfo={
    name:'sanjay',
    age:20,

}


//Function
const myFunction=function (){
    console.log("hello world");
}

console.log(typeof(myFunction));//function
console.log(typeof(myInfo));//object
console.log(typeof(heros));//object






