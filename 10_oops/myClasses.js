// class User{
//     constructor(username,email,password){
//         this.username
//         this.email=email
//         this.password=password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }


// }
// const chai=new User("chai","chia@gamil.com","122");
// console.log(chai.encryptPassword());

//behind the scene without class

function User(username,email,password){
    this.username
    this.email=email
    this.password=password
}
User.prototype.encryptPassword=function(){
        return `${this.password}abc`
}

const newUser=new User('ssnajay','sanaj@gmail.com','123')
console.log(newUser.encryptPassword());

