// Problem 3: Find the Second Maximum Element
// Write a function that takes an array of numbers as an argument and returns the second largest number in the array.
// Example:
// For the input array [5, 2, 8, 12, 3], the output should be 8.

var array = [5, 2, 8, 12, 3];
var n = array.length;
var heighest = -Infinity;
var secondHeighest = -Infinity;
for (var i = 0; i < n; i++) {
  if (array[i] > heighest) {
    secondHeighest = heighest;
    heighest = array[i];
  }
}
console.log(secondHeighest);
//or
var array = [5, 2, 8, 12, 3, 12];
var n = array.length;
array.sort((a, b) => a - b);
array.reverse();
console.log(secondHeighest);
