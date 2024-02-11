const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} curr value ${currval}`);
//     return acc+currval
// },0)
const myTotal=myNums.reduce(((acc,currval)=>acc+currval),0)
console.log(myTotal);

const shopingCart=[
    {
        itemName:"js course",
        price:299
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile development course",
        price:1299
    },
]
const totalPrice=shopingCart.reduce(((acc,item)=>acc+item.price),0)
console.log(totalPrice);