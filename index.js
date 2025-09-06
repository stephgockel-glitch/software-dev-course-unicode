// -----------------------------
// Task 1: Extract Code Points
// -----------------------------
let inputString = "Code";

// Unicode code point of first character ("C")
let firstCodePoint = inputString.charCodeAt(0);
console.log("First Code Point:", firstCodePoint);

// Unicode code point of third character ("d")
let thirdCodePoint = inputString.charCodeAt(2);
console.log("Third Code Point:", thirdCodePoint);

// -----------------------------
// Task 2: Create a Word from Code Points
// -----------------------------
let wordFromCodePoints = String.fromCharCode(72, 101, 108, 108);
console.log("Word from Code Points:", wordFromCodePoints);

// -----------------------------
// Task 3: Swap First and Last Characters
// -----------------------------
let swapString = "Launch";

// Get Unicode of first and last characters
let firstCharCode = swapString.charCodeAt(0); // "L"
let lastCharCode = swapString.charCodeAt(swapString.length - 1); // "h"

// Rebuild string: replace first with last, keep middle the same, replace last with first
let swappedString =
  String.fromCharCode(lastCharCode) +
  swapString.slice(1, -1) +
  String.fromCharCode(firstCharCode);

console.log("Swapped String:", swappedString);
