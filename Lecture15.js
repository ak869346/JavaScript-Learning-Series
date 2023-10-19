let name = "har\"";
console.log(name.length);

// include method

let sent = "World is very beautiful";
let res = sent.includes("World");
console.log(res);

console.log(sent.startsWith("World"));
console.log(sent.startsWith("World",0));


let str = "Please give me 1000";
console.log(str.slice("Please give me ".length));

let bag = "Safari";
console.log(bag.replace(bag[2],"m"));