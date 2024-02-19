class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
        
    }
    addCourse(){
        console.log(`a new course was added by the ${this.username}`);
    }
}
const newTeacher=new Teacher('sanajy','sanayu@gmail.com',1233)
console.log(newTeacher);

newTeacher.addCourse();

const masalaChai=new User('masalachai')

masalaChai.logMe();
newTeacher.logMe();

