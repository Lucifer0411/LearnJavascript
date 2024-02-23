const User={
    _email:'sanjay',
    _password:'asdfj',

    get email(){
        return this.email.toUpperCase();
    },
    set email(value){
        this.email=value
    }
}

const tea=Object.create(User)
console.log(tea._email);