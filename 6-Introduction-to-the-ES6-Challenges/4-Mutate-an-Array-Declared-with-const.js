/* const variables assigned to an object can still be changed
Using const does prevent from a variable identifier from being reassigned
Using bracket notation I was able to change elements in an array even though it was declared a const.
*/


const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

 s[0] = 2;
 s[1] = 5;
 s[2] = 7;

  // change code above this line
}
editInPlace();
