class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get password(){
        // console.log(this.password.toUpperCase());
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value
    }
}
const sanjay=new User('sanjay@gmail.com',"abc")

console.log(sanjay.password);
