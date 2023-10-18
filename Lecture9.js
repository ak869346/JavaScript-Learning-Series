// const prompt=require("prompt-sync")({sigint:true}); 
// let sum = 0;

// let n = prompt("Enter the number");
// n = Number.parseInt(n);

// for(let i=0;i<=n;i++) {
//     sum+=i;
// }
// console.log("Total sum is"+ sum);


let obj = {
    "Prashant":100,
    "Sammy":95,
    "Ankit":35,
    "Vikash":96
}

// for in loop
for(let a in obj) {
    console.log("Marks of " + a + " is " + obj[a]);
}

// for of loop

for(let a of "Sammy") {
    console.log(a);
}