/* The var keyword automatically declares global scope unless inside a function
The let key word will return the actually value of the variable
Var may return the updated version of the global scope
This can cause propblems.
 */

 function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
   let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}
