// console.log(2>1);
// console.log(2<1);
// console.log(2==1);


//comparison with different datatype
// console.log("2">1); //true
// console.log("02">1); //true


//Avoid using below code 

console.log(null>0); //false
console.log(null==0);//false
console.log(null<=0);//true

console.log(undefined==0)//false
console.log(undefined>0)//false
console.log(undefined<=0)//false

//=== 

console.log("2"===2); //false
//-------------------------------------------------------------------------------
//Memory type in javascript

//Stack (Primitive), Heap (Non-Primitive)

let myClgName="sagar institute of research and technology"

let anotherName=myClgName

anotherName="chaiaurcode"
console.log(anotherName);

let user={
    email:"user@google.com",
    upi:"user@ybi"
}

let user2=user
user2.email="sanjay@google.com"

console.log(user.email)
console.log(user2.email)


