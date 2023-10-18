let marks = {
    "Abhi":100,
    "Chinna":10,
    "Virat":18,
    "Sonu":84,
    "Ajay":78
}

// Ques 1

let n = Object.keys(marks).length; 
for(let i =0;i<n;i++) {
    console.log(marks[Object.keys(marks)[i]]);
}

console.log(Object.keys(marks));

// Ques 2

for(let a in marks) {
    console.log(marks[a]);
}

// Ques 3 ..

const prompt=require("prompt-sync")({sigint:true}); 
let num;
let correctNo = 20;
while(num!=correctNo) {
    num = prompt("Enter a number");
    console.log("Try Again");
}
console.log("You entered a correct number");



// Ques 4 

const mean =  (a,b,c,d,e)=> {
        return (a+b+c+d+e)/5;
}

let m = mean(10,20,30,40,50);
console.log(m);