/* >template literal is a special type of string that makes creating complex strings easier
This allows you to create multi-line strings and to use string interpolation features to create strings
To add variables to strings, you just drop the variable in a template string and wrap it with ${ and }
Basically, you won't have to use concatenation with the + operator anymore
This new way of creating strings gives you more flexibility to create robust strings
*/

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";

  // change code below this line
  const resultDisplayArray = arr.map(val => `<li class="text-warning">${val}</li>`);
  // change code above this line

  return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);
