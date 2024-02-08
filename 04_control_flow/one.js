//if

// const isUserLoggedIn=true

// if(isUserLoggedIn){

// }

if(2=="2"){
    console.log("== Executed");
}
if(2==="2"){
    console.log("=== executed");
}


//Nullish coalescing Operator (??):null undefined

let val1;
// val1=5 ?? 10
// val1 = null ?? 10
// val1= undefined ?? 10
// val1=null ?? 10 ??15
val1=null ?? undefined ?? 10
console.log(val1);


//Terniary operator

// condition ? true: false

const iceTeaPrice=100
iceTeaPrice>=100? console.log("more than 80") : console.log("more than 80");


