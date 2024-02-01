//Date

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleTimeString());
//output
// Thu Feb 01 2024 17:06:36 GMT+0000 (Coordinated Universal Time)
// Thu Feb 01 2024
// 2/1/2024
// 2024-02-01T17:06:36.711Z
// 5:06:36 PM


let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023

let myCreatedDate2=new Date("01-14-2023")


let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log((myTimeStamp-myCreatedDate.getTime()));

console.log(Math.floor(Date.now()/1000))

let newDate=new Date()




