let num = [1,2,3,4,5];

for(let i=0;i<num.length;i++) {
    console.log(num[i]);
}


num.forEach((element)=> {
    console.log(element*element);
})


let name = ["Arrau","Bhaukal"];
let arr = Array.from(name);
console.log(arr);
console.log(typeof name);
console.log(typeof arr);


// for of loop
for(let i of num) {
    console.log(i);
}


// for of loop
for(let item in name) {
    console.log(name[item]);
}