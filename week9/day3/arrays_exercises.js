// 1
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("1: " + numbers[2]);

// 2
numbers[1] = 10;

// 3
numbers.push(6);
console.log("3: " + numbers);

// 4
numbers.pop();
console.log("4: " + numbers);

// 5
console.log("5: " + numbers.length);

// 6
for (let i = 0; i < numbers.length - 1; i++) {
  console.log(numbers[i]);
}

// 7
numbers.forEach(function (num, index) {
  console.log(`Index ${index}: ${num}`);
});

// 8
let fruits = ["Apple", "Banana", "Cherry"];

// 9
fruits.unshift("Orange");
console.log("9: " + fruits);

// 10
fruits.shift();
console.log("10: " + fruits);

// 11
let moreFruits = ["Grapes", "Kiwi"];
const totalFruits = fruits.concat(moreFruits);
console.log("11: " + totalFruits);

// 12
let reversed = numbers.reverse();
console.log("12: " + reversed);

// 13
let sorted = numbers.sort();
console.log("13: " + sorted);

// 14 (the dots are important)
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log(`14:  Max: ${max}, Min: ${min}`);

// 15
let sum = numbers.reduce((total, num) => total + num, 0);
console.log("15: " + sum);

// 16
let duplicates = [1, 2, 3, 1, 2, 4, 5];
let unique = duplicates.filter(
  (num, index, array) => array.indexOf(num) == index
);
console.log("16: " + unique);

// 17
let arr1 = [3, 2, 1];
let arr2 = [1, 2, 3];

// ...spread opearator
let sortedArr1 = [...arr1].sort((a, b) => a - b);
let sortedArr2 = [...arr2].sort((a, b) => a - b);

let areEqual =
  sortedArr1.length === sortedArr2.length &&
  sortedArr1.every((num, i) => num === sortedArr2[i]);

console.log("17: " + areEqual); // true

// 18
let withoutThree = numbers.filter((num) => num !== 3);
console.log("18: " + withoutThree);

// 19
let primeNumbers = numbers.filter((num) => {
  if (num < 2) return false; // 0 and 1 are not prime
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false; // If divisible, not prime
  }
  return true; // If no divisors found, it's prime
});

console.log("19: " + primeNumbers);

// 20
let arrA = [1, 2, 3];
let arrB = [4, 5, 6];

let multiplied = arrA.map((num, i) => num * arrB[i]);
console.log("20: " + multiplied);

// 21
const maxSubarraySum = (numbers) => {
  let maxSum = -Infinity,
    currentSum = 0;
  numbers.forEach((num) => {
    currentSum = Math.max(num, currentSum + num);
    maxSum = Math.max(maxSum, currentSum);
  });
  return maxSum;
};

console.log("21: " + maxSubarraySum(numbers));
