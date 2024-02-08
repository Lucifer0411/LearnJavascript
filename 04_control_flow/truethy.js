// const userEmail="sanjay@gamil.com"

const emtyEmail=""
if(emtyEmail){
    console.log("got user emial");
}else{
    console.log("don't have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truethy Values
// "0", 'false', " ", [], {}, function(){},

if(emtyEmail.length===0){
    console.log("Array is Empty");
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}


