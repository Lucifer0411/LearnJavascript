const user={
    username:"sanjay",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()

const chai=()=>{
    let username="sanjay"
    console.log(this.username);
}
chai();

const addTwo=(num1,num2)=>num1+num2//implicit
 
const addThree=(num1,num2,num3)=>(
    num1+num2+num3//without return 
)
console.log(addTwo(3,4));

console.log(addThree(1,3,4));
