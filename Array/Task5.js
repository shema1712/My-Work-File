// //Write a function that takes an array of numbers as an argument and returns true if the array is sorted
//in ascending order, and false otherwise.
// Example:
// For the input array [1, 2, 3, 4, 5], the output should be true.

function isSortedAscending(arr) {
  // Check if every element is less than or equal to the next one
  return arr.every((element, index) => {
    // Skip the comparison for the first element
    if (index > 0) {
      return element >= arr[index - 1];
    }
    return true;
  });
}

// Example usage:
const exampleArray = [1, 2, 3, 4, 5];
const isSorted = isSortedAscending(exampleArray);
console.log(isSorted); // Output: true

//or
function isSortedDescending(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return true; // If any element is greater than the previous one, the array is not sorted in descending order
    }
  }
  return false; // If the loop completes without returning false, the array is sorted in descending order
}

// Example usage:
const myArray = [10, 5, 8, 6, 9];
console.log(myArray);
const arrSorted = isSortedDescending(exampleArray);
console.log(isSorted); // Output: true
