/*> ES6 provides a new syntax to help create objects, using the keyword class.
The class syntax simply replaces the constructor function creation
When the class keyword declares a new function, and a constructor was added
This would be invoked when new is called - to create a new object
*/


function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'
