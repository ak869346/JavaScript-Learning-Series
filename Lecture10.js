const prompt=require("prompt-sync")({sigint:true}); 
let n = prompt("Enter the number");

n = Number.parseInt(n);
// while loop
let i =0;
// while(i<n) {
//     console.log(i);
//     i++;
// }

// do while loop

do {
    console.log(i);
    i++;
}
while(i<n);

