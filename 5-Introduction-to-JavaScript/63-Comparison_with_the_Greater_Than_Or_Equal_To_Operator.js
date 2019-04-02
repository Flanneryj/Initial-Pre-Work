/* (>=) stands for greater than or equal to
If the number to the left is greater than or equal to the number to the right, it returns true
Otherwise, it returns false
*/
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

// Change this value to test
testGreaterOrEqual(10);
