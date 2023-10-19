let num1 = [1,2,3,4,5];
let num2 = [6,7,8,9,10];

delete num1[0];
console.log(num1,num1.length);

let newArr = num1.concat(num2);
console.log(newArr);

let compare = (a,b)=> {
    return a-b;
}
let num3 = [23,11,9000,88,11111];
num3.sort();                        // sort array alphabetically...
console.log(num3);
num3.sort(compare);
console.log(num3);

let deletedItem = num3.splice(1,2,23,24,25);  // (start,count,adding value) argument of splice...
console.log(num3);

let num4 = num3.slice(1,3);
console.log(num4);

