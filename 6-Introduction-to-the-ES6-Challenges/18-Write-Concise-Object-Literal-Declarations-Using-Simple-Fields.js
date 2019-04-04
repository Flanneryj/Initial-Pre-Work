/*> * ES6 provides the syntactic sugar to eliminate the redundancy of having to write x: x
 You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood
 */
 const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
 };
