// Problem 8: Find the Median of Array Elements
// Write a function that takes an array of numbers as an argument and returns the median of all the elements in the array.
// Example:
// For the input array [5, 2, 8, 12, 3], the output should be 5.

function findMedianArray(arr) {
  arr.sort((a, b) => a - b);
  var median = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[median - 1] + arr[median]) / 2;
  } else {
    return arr[median];
  }
}
var number = [5, 2, 8, 12, 3, 7, 9, 1];
console.log(findMedianArray(number));
