/* (&&) Is the logical and operator
It returns true if and only if the operands to the left and right of it are true.
if (this value " and " this value) are true return this otherwise return this
*/
function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
    }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
