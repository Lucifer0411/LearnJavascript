//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element==5){
        // console.log("5 is best number");
    }
    // console.log(element);
    
}

let myArray=["flash","batman","superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}



//break and continue


for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log("5 is best");
        break;
    }
    console.log("value of i is "+ index); 
}
console.log("-----------------------------------------");
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log("5 is best");
        continue;
    }
    console.log("value of i is "+ index); 
}