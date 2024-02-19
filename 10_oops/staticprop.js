class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const sanjay=new User('sanjay')
// console.log(sanjay.createId());//not accessible

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email

    }
}

const iphone=new Teacher('iphone','iphone@gmail.com')
console.log(iphone.logMe());
// console.log(iphone.createId());//not access to the children
