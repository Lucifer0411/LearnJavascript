//Singleton Objects

const tinderUser=new Object()

tinderUser.id="123abc"
tinderUser.name="Naman"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser={
    email:"sanjay@gmail.com",
    fullname:{
        userfullname:{
            firstname:"sanjay",
            lastname:"pawar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);
// console.log(regularUser.fullname.userfullname);


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3={...obj1,...obj2}
// console.log(obj3);


const users=[
    {
    id:1,
    email:"sanjaypawar@gmail.com"
},
    {
    id:2,
    email:"mayank@gmail.com"
},
    {
    id:3,
    email:"naman@gmail.com"
},
]
// console.log(users[1]);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLogged"));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor
// const {courseInstructor}=course
const {courseInstructor:instructor}=course

console.log(instructor);


