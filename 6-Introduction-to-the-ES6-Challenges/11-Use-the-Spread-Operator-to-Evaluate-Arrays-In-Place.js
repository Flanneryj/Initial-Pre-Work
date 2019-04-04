/* >The spread operator allows you to expand arrays and other expressions in places where multiple parameters or elements are expected
I used the spread operator to copy the information of one array and paste it in a new arr1 */

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
