// Problem 2: Find the Minimum Element
// Write a function that takes an array of numbers as an argument and returns the smallest number in the array.
// Example:
// For the input array [5, 2, 8, 12, 3], the output should be 2.

function findMinimumNumber() {
  return Math.min(...arr);
}
var arr = [5, 2, 8, 12, 3];
var result = findMinimumNumber(arr);
console.log(result);
