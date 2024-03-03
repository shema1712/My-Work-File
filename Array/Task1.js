// Write a function that takes an array of numbers as an argument and returns the largest number in the array.
// Example:
// For the input array [5, 2, 8, 12, 3], the output should be 12.

function largestElement(arr) {
  return Math.max(...arr);
}
var arr = [5, 8, 12, 2, 3];
result = largestElement(arr);
console.log(result);
