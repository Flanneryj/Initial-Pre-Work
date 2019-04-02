/* Global scope is variables which are defined outside of a function block
Scope actually is referring to the visibility of variables
Variables which are used without the var keyword are automatically created in the global scope
They can be seen everywhere in your JavaScript code
*/
// Declare your variable here


function fun1() {
oopsGlobal = 5;

}
var myGlobal = 10;
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
