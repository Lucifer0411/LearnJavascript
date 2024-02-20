const descriptor=Object.getOwnPropertyDescriptors(Math,'PI')
// console.log(descriptor);

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);

const mynewObject={
    name:'ginger chai',
    price:250,
    isAvailable:true,
    orderChai:function(){
        console.log('chai nhi bani');
    }
}
// console.log(Object.getOwnPropertyDescriptors(mynewObject,"name"));

Object.defineProperty(mynewObject,'name',{
    writable:false,
    enumerable:false
})
// mynewObject.name='sanjay'
// console.log(mynewObject.name);

for (const [key,value] of Object.entries(mynewObject)) {
    if(typeof value!='function'){
        console.log(`${key} and ${value}`);
    }
}
