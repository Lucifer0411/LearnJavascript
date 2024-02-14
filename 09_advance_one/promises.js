const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(()=>{
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Async task two');
        resolve();
    },1000)
})

.then(()=>{
    console.log('promise two consume');
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username:'chai',email:'chai@example.com'})
    },1000)
})
promiseThree.then((user)=>{
    console.log(user);
})


const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({username:'sanjay',email:'sanjay@gmail.com'})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((e)=>{
    console.log(e);
}).finally(()=>{
    console.log("The promise is either resolve or rejected");
})

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve({username:"javascipt",password:"123"})
        }else{
            reject("Error:something went wrong")
        }
    },1000)
})

async function consumePromiseFive(){
  try{
    const response=await promiseFive
    console.log(response);
  }catch(e){
    console.log(e);
  }
}
consumePromiseFive();


async function getAllUsers(){
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // console.log(response);
        const data=await response.json();
        console.log(data);
    }catch(e){
        console.log(e);
    }
}
// getAllUsers();

function getuserData(){
    const response=fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res)=>res.json())
    .then((data)=>data.userId)
    .then((id)=>console.log(id))
    .catch((e)=>{
        console.log(e);
    })
    
}
getuserData()

