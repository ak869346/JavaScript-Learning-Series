// Ques 1....
const prompt=require("prompt-sync")({sigint:true}); 

let a = prompt("Hey What's your age");
a = Number.parseInt(a);

// if(a>10 && a<20) {
//     console.log("Age lies between 10 and 20");
// }
// else {
//     console.log("Age not lies between 10 and 20");
// }


// Ques 2..

// switch(a) {
//     case 12:
//         console.log("Age is 12");
//         break;
//     case 13:
//         console.log("Age is 13");
//         break;
//     case 14:
//         console.log("Age is 14");
//         break;
//     case 15:
//         console.log("Age is 15");
//         break;
//     default:
//         console.log("Default Age");
// }


// Ques 3 ..

// if(a%2==0 && a%3==0) {
//     console.log("Number is divisible by 2 and 3 Both");
// }
// else {
//     console.log("Your number is not divisible by both");
// }


// Ques 4 

// if(a%2==0 || a%3==0) {
//     console.log("Number is divisible by atleast one 2 or 3");
// }
// else {
//     console.log("Your number is not divisible by any one");
// }


// Ques 5 
(a>18)? console.log("You can Drive"):console.log("You cannot Drive");