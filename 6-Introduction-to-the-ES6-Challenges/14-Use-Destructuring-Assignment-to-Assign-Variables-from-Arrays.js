/* >I learned how to use destructuring assignment to assign variables from arrays */

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
const c = a;
a = b;
b = c;
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
