// Problem 9: Find the Mode of Array Elements
// Write a function that takes an array of numbers as an argument and returns the mode of all the elements in the array.
// Example:
// For the input array [5, 2, 8, 12, 3, 8], the output should be 8.

function findMode(arr) {
  var mode = null;
  var maxCount = 0;
  var counts = {};

  // Count occurrences of each element
  arr.forEach(function (element) {
    if (counts[element] === undefined) {
      counts[element] = 1;
    } else {
      counts[element]++;
    }
l
    // Update mode if needed
    if (counts[element] > maxCount) {
      mode = element;
      maxCount = counts[element];
    }
  });

  return mode;
}

// Example usage:
let array = [5, 2, 8, 12, 3, 8];
console.log(findMode(array)); // Output: 8
