// const user={
//     username:'sanjay',
//     loginCount:8,
//     signedIn:true,

//     getUserDetails:function(){
//         // console.log('got user details from database');
//         // console.log(this);
//         console.log(`Username:${this.username} and signedin: ${this.signedIn}`);
//     }
// }

// console.log(user);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,isLoggedIn){
    this.username=username
    this.isLoggedIn=isLoggedIn
    return this;
}

// const userOne=User('sanjay',true)
// const userTwo=User('Naman',11)
// console.log(userOne);
const userOne=new User('sanjay',true)
const userTwo=new User('Naman',11)
console.log(userOne);
console.log(userTwo);

// new keyword
// 1 new instance created
// 2.constructor function called by new keyword
// 3. data is inserted in this keyword
