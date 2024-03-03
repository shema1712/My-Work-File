// Problem 15: For Loop + If-Else-If Statement
// Print all numbers from 1 to n using a for loop and check if each number is positive, negative, or zero using an if-else-if statement.
// Example:
// For n = 5, print 1 2 3 4 5.
function findValue(num) {
  for (var num = 1; num <= 5; num++) {
    if (num > 0) {
      console.log(num + " " + "Positive");
    } else if (num < 0) {
      console.log(num + " " + "Negative");
    } else {
      console.log("Zero");
    }
  }
}

findValue();
