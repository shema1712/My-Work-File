// Problem 6: If-Else-If Statement
// Check if a given number n is positive, negative, or zero. Print the corresponding message.
// Example:
// For n = 5, print "Positive".

function findPositiveNegativeZero(num) {
  if (num > 0) {
    console.log("Positive Number ");
  } else if (num < 0) {
    console.log("Negative Number");
  } else {
    console.log("zero");
  }
}
findPositiveNegativeZero(0);
