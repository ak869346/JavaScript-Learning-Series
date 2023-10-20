const prompt=require("prompt-sync")({sigint:true}); 

// Ques 1
// let arr = [12,23,34,5,6];

// let a = prompt("Enter a number");

// a = Number.parseInt(a);

// arr.push(a);
// console.log(arr);


// Ques 2

// let arr1 = [1,2,3];
// let a1;
// while(a1!=0) {
//     a1 = prompt("Enter a number");
//     a1 = Number.parseInt(a1);
//     arr1.push(a1);

// }
// console.log(arr1);


// Ques 3 

// let ar = [1,2,3,10,20,40,45];

// let newA = ar.filter((value)=>{
//     return value%10==0;
// })
// console.log(newA);

// Ques 4

let r1 = [1,2,3,4,5];

let sq = r1.map((value)=>{
    return value*value;
})

console.log(sq);


// Ques 5... 

let r2 = [1,2,3,4,5];

let fact = r2.reduce((x1,x2)=>{
    return x1*x2;
})

console.log(fact);