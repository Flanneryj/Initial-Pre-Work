/* >Default parameters kick in when an argumnent has not been specified
It can be declared in the function by setting the argument to a fallback parameter
*/

const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
