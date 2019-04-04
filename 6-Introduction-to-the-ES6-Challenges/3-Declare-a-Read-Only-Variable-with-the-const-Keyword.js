/* Const allows you to declare variables
Once a variable is assigned with const, it cannot be reassigned
Use let when you want the variable to change
Use const when you want the variable to remain constant.
*/

function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");
