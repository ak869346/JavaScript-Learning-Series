// map method...  -  create a new array by performing some operation on each element..

let arr = [25,36,96];

console.log(arr);


let newA = arr.map((value,index)=>{
    console.log(value,index);
    return value+index;
})

console.log(newA);

// filter method ...  fliter the given array on given condition...

let arr2 = [26,85,14,23,11,9,8,6,12];

let arr3 = arr2.filter((a)=> {
    return a>10;
})

console.log(arr3);


// reduce method in js..   - Reduces an array to a single value..

let a1 = [1,2,3,4,5,6];

// let a2 = a1.reduce((h1,h2)=>{
//     return h1+h2;
// })
const reduce_func = (h1,h2)=> {
    return h1+h2;
}
let a2 = a1.reduce(reduce_func);  // function as argument...
console.log(a2);