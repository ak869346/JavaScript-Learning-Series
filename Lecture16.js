let name = [12,34,5,6,false,"Not present"];
console.log(name[0]);
console.log(name[1]);
console.log(name[4]);

console.log(name.length);
console.log(name[6]);

name[6] = "Sammy";
console.log(name);

// Arrays are Mutable and can be Changed....


console.log(typeof name);


for(let i=0;i<name.length;i++) {
    console.log(name[i]);
}