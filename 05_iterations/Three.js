//for of loop

// ["","","",""]
// [{},{},{},{}]

const arr=[1,2,3,4,5]


for (const val of arr) {
    // console.log(`value is ${val}`);
}

const name="sanjay"

for (const char of name) {
    // console.log(`char is ${char}`);
}


//Maps

const map=new Map()
map.set('IN',"india")
map.set('USA',"United state of america")
map.set('FR',"france")

// console.log(map)

for (const [key,value] of map) {
    // console.log(key+" "+value);
}

const myObject={
    game1:"NFS",
    game2:"spiderman"
}

for (const [key,value] of myObject) {//myObject cannot be iterable
    console.log(key+" "+value);
}



