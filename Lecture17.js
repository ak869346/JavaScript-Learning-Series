let num = [1,45,34,35,90];

let b = num.toString();
console.log(b);
console.log(typeof b);

let c = num.join("-");
console.log(c);

let r = num.pop();
console.log(r,num);

let s = num.push(49);  // s return the new length of array..
console.log(num,s);


let t = num.shift();   // remove the first element and return it....
console.log(t);

let q = num.unshift(12);   // add element at beginning and return new array length...
console.log(q,num);

let u = num.unshift(123);
console.log(u);

