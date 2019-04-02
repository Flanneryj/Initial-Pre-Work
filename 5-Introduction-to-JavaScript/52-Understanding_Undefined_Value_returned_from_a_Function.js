/* When the function is called but the return variable is undefined it will return as such
 */
 // Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive () {
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
