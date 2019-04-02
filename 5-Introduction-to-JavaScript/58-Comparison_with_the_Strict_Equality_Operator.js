/* (===) is considered strict equality
If the values being compared have different types, they are considered unequal, and the strict equality operator will return false
 */
 // Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
