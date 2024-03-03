// Problem 6: Find the Sum of Array Elements
// Write a function that takes an array of numbers as an argument and returns the sum of all the elements in the array.
// Example:
// For the input array [5, 2, 8, 12, 3], the output should be 30.

// function sumOfArray(arr) {
//   var arr = [5, 2, 8, 12, 3, 50];
//   var sum = 0;
//   for (var x of arr) sum += x;
//   return sum;
// }

// console.log(sumOfArray(5, 2, 8, 12, 3, 50));

///or

function sumOfArray(arr) {
  var arr = [5, 2, 8, 12, 3, 50];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) sum += arr[i];
  return sum;
}
console.log(sumOfArray(5, 2, 8, 12, 3, 50));
