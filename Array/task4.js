// Problem 4: Find the Second Minimum Element
// Write a function that takes an array of numbers as an argument and returns the second smallest number in the array.
// Example:
// For the input array [5, 2, 8, 12, 3], the output should be 3.

var arr = [5, 2, 8, 12, 3];
var n = arr.length;

arr.sort((a, b) => a - b);

console.log(arr);
console.log(arr[1]);
