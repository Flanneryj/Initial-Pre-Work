/* Order is important in if, else if statements
The function is executed from top to bottom so you will want to be careful of what statement comes first
Using logical order of if else statments i was able to correct the order of the code so it runs properly
 */

 function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
