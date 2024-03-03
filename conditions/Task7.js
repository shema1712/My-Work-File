// Problem 7: Nested If Statement
// Check if a given number n is even or odd. If n is even, check if it is positive or negative.
// Print the corresponding message.
// Example:
// For n = 5, print "Positive Odd".

num = -2;

if (num % 2 === 0) {
  if (num > 0) {
    console.log("Positive Even");
  } else if (num < 0) {
    console.log("negative Even");
  } else {
    console.log("Zero");
  }
} else {
  if (num > 0) {
    console.log("positive Odd");
  } else if (num < 0) {
    console.log("negative odd");
  } else {
    console.log("Zero");
  }
}
