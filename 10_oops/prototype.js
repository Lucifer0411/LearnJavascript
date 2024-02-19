let myName='sanjay        '


// console.log(myName.truelength);

let myHeros=["thor","spiderman","deadpool"]
let heroPower={
    thor:'hammer',
    spiderman:'sling',
    deadpool:'immune',
    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hitesh=function(){
    console.log("hitesh is present in all objects");
}
// heroPower.hitesh();
// myHeros.hitesh();


let anotherUsername="naman      "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();
// inheritance

const User={
    name:'snajay',
    email:'snajay@gmail.com'
}
const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User;

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)