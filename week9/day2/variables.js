// PART 1

let fullName = "John Doe";
let birthYear = 1995;
let currentYear = 2025;
let isPremiumMember = false;
let userAge = currentYear - birthYear;
let upperName = fullName.toUpperCase();
console.log(
  `Hello ${upperName}! You are ${userAge} years old. Premium Member: ${isPremiumMember}.`
);

// PART 2

function checkPasswordStrength(password) {
  if (password.length < 6) return "Weak";
  if (password.length >= 6 && password.length <= 10) return "Medium";
  if (password.length > 10) return "Strong";
}

console.log(checkPasswordStrength("123"));
console.log(checkPasswordStrength("abcdefg"));
console.log(checkPasswordStrength("SecurePass123!"));

// PART 3

function applyDiscount(price, discount) {
  let actualDiscount = (discount / price) * 100;
  return price - actualDiscount;
}

console.log(applyDiscount(100, 20));
console.log(applyDiscount(50, 10));
console.log(applyDiscount(200, 50));

// PART 4

const ctf = (temperature) => {
  let result = temperature * (9 / 5) + 32;
  return result;
};

const ftc = (temperature) => {
  let result = (temperature - 32) * (5 / 9);
  return result;
};

console.log(ctf(0));
console.log(ctf(100));
console.log(ftc(32));
console.log(ftc(212));

// PART 5

const isLeapYear = (year) => {
  if (year % 4 == 0 && year % 100 != 0) {
    return true;
  } else if (year % 400 == 0) {
    return true;
  } else {
    return false;
  }
};

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
