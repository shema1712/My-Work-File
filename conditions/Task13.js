// Problem 13: Do While Loop + Nested If Statement
// Print all numbers from 1 to n using a do while loop and check if each number is even or odd using a nested if statement.
// Example:
// For n = 5, print 1 3 5.

function printNumber(num) {
  var num = 1;
  do {
    if (num % 2 === 0) {
      //   console.log(num + " " + "even");
    } else {
      console.log(num + " " + "odd");
    }
    num++;
  } while (num <= 5);
}
printNumber();
