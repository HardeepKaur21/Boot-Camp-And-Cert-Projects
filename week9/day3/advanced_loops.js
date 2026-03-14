// Problem 1 ------------------------------
function fizzBuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);

// Problem 2 -----------------------------------
function findMinMax(array) {
  let max = Math.max(...array);
  let min = Math.min(...array);

  return `Smallest: ${min}, Largest: ${max}`;
}

console.log();
console.log(findMinMax([3, 10, 2, 50, 8, 23]));

// Problem 3 -----------------------------------
function countVowels(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (
      word.charAt(i) === "a" ||
      word.charAt(i) === "e" ||
      word.charAt(i) === "i" ||
      word.charAt(i) === "o" ||
      word.charAt(i) === "u"
    ) {
      count++;
    }
  }
  return `Vowel Count: ${count}`;
}

console.log();
console.log(countVowels("hello world"));

// Problem 4 -----------------------------------

/*
split('') – Converts the string into an array of characters.
reverse() – Reverses the array.
join('') – Joins the reversed array back into a string.
*/

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log();
console.log(reverseString("hello"));

// Problem 5 ----------------------------------------
function sumDigits(n) {
  let s = String(n)
    .split("")
    .map(Number)
    .reduce((sum, digit) => sum + digit, 0);
  return s;
}

console.log();
console.log(sumDigits(123));

// Problem 6 -----------------------------------------
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log();
console.log(factorial(5));

// Problem 7 ------------------------------------------
function isPalindrome(str) {
  let len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
}

console.log();
console.log(isPalindrome("racecar"));

// Problem 8 ---------------------------------------------
function findLargest(arr) {
  if (arr.length === 0) return null;

  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log();
console.log(findLargest([10, 5, 100, 7, 20]));

// Problem 9 ----------------------------------------------
function firstDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    let seen = new Set();

    for (let num of arr) {
      if (seen.has(num)) return num;
      seen.add(num);
    }
  }
  return -1;
}

console.log();
console.log(firstDuplicate([2, 4, 3, 5, 2, 7, 8, 4]));

// Problem 10 -----------------------------------------
function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i); // Spaces before stars
    let stars = "*".repeat(2 * i - 1); // Odd number of stars
    console.log(spaces + stars); // Print the row
  }
}

console.log();
printPyramid(5);
