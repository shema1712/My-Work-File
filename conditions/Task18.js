// Problem 30: Nested If-Else + For Loop + Do While Loop
// Print all numbers from 1 to n. If a number is divisible by 3, print "Fizz", if a number is divisible by 5, print "Buzz", if a number is divisible by both 3 and 5, print "FizzBuzz".
// Example:
// For n = 5, print 1 2 Fizz 4 Buzz.

function findFizzBuzz(num) {
  var num = 1;
  for (var num = 1; num <= 5; num++) {
    do {
      if (num % 3 === 0 && num % 5 === 0) {
        console.log("Fizzbuzz");
      } else if (num % 3 == 0) {
        console.log("Fizz");
      } else if (num % 5 == 0) {
        console.log("buzz");
      } else {
        console.log(num);
      }
      num++;
    } while (num <= 5);
  }
}

findFizzBuzz();
