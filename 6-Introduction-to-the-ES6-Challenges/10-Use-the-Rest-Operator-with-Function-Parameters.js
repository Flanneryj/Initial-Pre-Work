/* >With the rest operator, you can create functions that take a variable number of arguments
The rest operator stores arguments in an array that can be accessed later from inside the function
*/
const sum = (function() {
  "use strict";
  return function sum(...args ) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
