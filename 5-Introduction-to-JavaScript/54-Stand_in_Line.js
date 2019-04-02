/* I used .push() method to add a number onto the end of the array
and used .shift() to remove an number from the front of an array and return the removed number
*/
function nextInLine(arr, item) {
  arr.push(item);
  var removed = arr.shift();
  return removed;

  return (arr, item);  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
