const prompt=require("prompt-sync")({sigint:true}); 
let r;
let a;
    r = Math.floor(Math.random() * 100);
while(r!=a) {
    a = prompt("Enter your guess number");
    if(r>a) {
        console.log("Your number is lesser");
    }
    else if(r<a) {
        console.log("Your number is greter");
    }
    else {
        console.log("Correct number");
    }
}