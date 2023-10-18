function average(x,y) {
    return (x+y)/2;
}

console.log("Average is " + average(10,20));


const sum = (p,q)=> {
    return p+q;
}

console.log("Sum is " + sum(12,12));


const hello = ()=> {
    console.log("Hello");
    return "Hii";
}

let res = hello();
console.log(res);
hello();