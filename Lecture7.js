const prompt=require("prompt-sync")({sigint:true}); 

let a = prompt("Hey What's your age");
a = Number.parseInt(a);

// if(a>0) {
//     console.log("Valid age");
// }
// else {
//     console.log("Invalid Age");
// }


if(a<0) {
    console.log("Valid Age");
}
else if(a<9) {
    console.log("You are a kid and cannot think of driving");
}
else if(a<18 && a>9) {
    console.log("You are a kid now and can drive after 18");
}
else {
    console.log("You can drive you are above 18");
}