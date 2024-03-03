// Problem 9: For Loop + Nested If Statement
// Print all numbers from 1 to n using a for loop and check if each number is even or odd using a nested if statement.
// Example:
// For n = 5, print 1 3 5.
function findEvenOdd(n) {
  for (n = 1; n <= 5; n++) {
    if (n % 2 == 0) {
    } else {
      console.log(n + " " + "Odd");
    }
  }
}
findEvenOdd();
