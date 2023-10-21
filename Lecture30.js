let runAgain = true;

while(runAgain) {
  let age = prompt("Enter age");
  age = Number.parseInt(age);

  if(age<0) {
    console.error("Wrong age");
  }

  if(age>18) {
    alert("You can drive");
  }
  else {
    alert("You can't drive");
  }
  runAgain = confirm("Do you want to play again");
}


// Q 3 console.error("Wrong age");

let num = prompt("Enter number");
num = Number.parseInt(num);

if(num>4) {
  location.href = "https://google.com";
}


 //Q 5

 let color = prompt("Enter color name");

document.body.style.background = color;

