console.log(console);

console.log("Hey");

console.assert((23>12));

console.error("This is error");

let obj = {
    name:"AK",
    roll:25,
    sec:"A"
}

console.table(obj);


console.info("Hello Budyy");

console.time("Hello");

console.timeEnd("Hello");


console.time("forLoop");

for(let i=0;i<133;i++) {
    console.log(i);
}

console.timeEnd("forLoop");


console.time("whileLoop");
let j;
while(j<133) {
    console.log(j);
    j++;
}
console.timeEnd("whileLoop");