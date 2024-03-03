// Problem 11: While Loop + Nested If Statement
// Print all numbers from 1 to n using a while loop and check if each number is even or odd using a nested if statement.
// Example:
// For n = 5, print 1 3 5.

function printOddEven() {
  var num = 0;
  while (num <= 5) {
    num++;
    {
      if (num % 2 == 0) {
      } else {
        console.log(num + " " + "odd");
      }
    }
  }
}
printOddEven();
