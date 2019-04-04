/* the var keyword allows you to directly overwrite code using the same variable
This can cause problems in longer sections of code
ES6 introduced the let keyword to solve the problem of accidentally overwriting a variable in a longer secrtion of code
The let keyword desnt allow you to overwrite a variable decloration
A variable with the same name can only be declared once.
*/

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
