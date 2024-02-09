
const coding=["js","ruby","java","python","cpp","swift"]

// coding.forEach(function(item){
//     console.log(item);
// })
// coding.forEach((item)=>console.log(item)) 

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding=[
    {
        languageName:"javascript",
        languageNameFileName:"js",
    },
    {
        languageName:"java",
        languageNameFileName:"java",
    },
    {
        languageName:"python",
        languageNameFileName:"py",
    },
]
//objects inside a array

myCoding.forEach((item)=>{
    console.log(`Language name ${item.languageName} file name ${item.languageNameFileName}`);
})
