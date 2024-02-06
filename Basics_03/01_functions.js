

function sayMyName(){
console.log("H");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");
}

sayMyName;// function reference
// sayMyName();// function execution

function addTwoNumbers(num1, num2){//parameters
    // console.log(num1+num2);

    // let result=num1+num2
    // return result

    return num1+num2
}


const sum=addTwoNumbers(3,4);//arguments
// console.log(sum);

function loginUserMessage(username="Mayank"){// if the value is passed then if condition will never undefine
    // if(username===undefined){
    //     return `please enter a username`
    // }
    // if(!username){
    //     return `please enter a username`
    // }
    // return `${username} just logged in`

    // return (username===undefined)?`please enter a username`:`${username} just logged in`
    return (!username)?`please enter a username`:`${username} just logged in`
}
console.log(loginUserMessage("sanjay"));
console.log(loginUserMessage());