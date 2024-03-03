// Problem 7: Find the Average of Array Elements
// Write a function that takes an array of numbers as an argument and returns the average of all the elements in the array.
// Example:
// For the input array [5, 2, 8, 12, 3], the output should be 6.

function findAverage(arr) {
  var arr = [5, 2, 8, 12, 3, 8];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
}
console.log(findAverage(5, 2, 8, 12, 3, 8));
