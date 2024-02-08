//Immediately Invoked Function Expressions (IIFE)
//it is used to remove globle scope polution variables
(function chai(){
    console.log(`DB connected`);
})();//; is important to stop the function

((name)=>{
    console.log(`DB connected to ${name}`);
})("sanjay")


