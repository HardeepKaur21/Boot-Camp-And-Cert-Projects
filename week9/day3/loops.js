// Challenge 1
let books = [
  "1984",
  "The Hobbit",
  "To Kill a Mockingbird",
  "Harry Potter",
  "The Great Gatsby",
];

books.forEach((book, index) => {
  console.log(`${index + 1}. ${book}`);
});

// Challenge 2

// === is the equivalent of .equals in Java
let attempts = 3;
let input = "Gill";
console.log();
while (attempts > 0 || !(input === "Harr")) {
  console.log("Incorrect password. Try again.");
  attempts--;
  if (attempts <= 0) {
    input = "Harr";
  }
}
console.log("Access Granted");

// Challenge 3
let borrowedBooks = [
  { name: "Alice", books: 3 },
  { name: "Bob", books: 5 },
  { name: "Charlie", books: 2 },
  { name: "David", books: 4 },
];

console.log();
for (let borrowedBook of borrowedBooks) {
  console.log(`${borrowedBook.name} has borrowed ${borrowedBook.books} books`);
}

let mostBooks = borrowedBooks.reduce((max, person) =>
  person.books > max.books ? person : max
);

console.log(
  `Person with most books: ${mostBooks.name} (${mostBooks.books} books)`
);

// Challenge 4
let bookPrices = [15, 20, 8, 12, 10];
let sum = 0;
bookPrices.forEach((bookPrice) => {
  sum += bookPrice;
});

let maxPrice = Math.max(...bookPrices);
console.log();
console.log("Total price: " + sum);
console.log("Max price: " + maxPrice);
