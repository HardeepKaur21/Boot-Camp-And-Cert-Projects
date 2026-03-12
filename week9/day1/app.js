let yourName = "John";
let yourAge = 25;
let isStudent = true;

console.log("Name: ", yourName);
console.log("Age: ", yourAge);
console.log("Is a studeny? ", isStudent);

let age = 20;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("Your are a minor");
}

function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("Alice");
greetUser("Bob");

function checkAge(age) {
  if (age == 18) {
    console.log("You are exactly 18!");
  } else if (age > 18) {
    console.log("You are an adult");
  } else {
    console.log("Your are a minor");
  }
}

checkAge(20);
checkAge(15);
