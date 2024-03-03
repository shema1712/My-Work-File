// Problem 27: Nested If-Else + While Loop
// Print all numbers from 1 to n. If a number is divisible by 3, print "Fizz", if a number is divisible by 5, print "Buzz",
//if a number is divisible by both 3 and 5, print "FizzBuzz".
// Example:
// For n = 5, print 1 2 Fizz 4 Buzz.

function findFizzBuzz() {
  var num = 0;
  while (num <= 5) {
    {
      if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
      } else if (num % 3 === 0) {
        console.log("Fizz");
      } else if (num % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(num);
      }
      num++;
    }
  }
}
findFizzBuzz();
