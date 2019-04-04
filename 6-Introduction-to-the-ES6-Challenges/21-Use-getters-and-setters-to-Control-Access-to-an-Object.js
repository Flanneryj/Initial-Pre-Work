/*> You can obtain values from an object, and set a value of a property within an object using GETTERS AND SETTERS
Getter functions are meant to simply return (get) the value of an object's private variable to the user without the user directly accessing the private variable
Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. This change could involve calculations, or even overwriting the previous value completely
Getters and setters are important, because they hide internal implementation details
 */
 function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat{
  constructor (temperature){
    this._temperature = temperature;
  }
  get temperature(){
    return (this._temperature - 32.0) * 5.0 / 9.0;
  }
  set temperature(updatedTemp){
    this._temperature = ((updatedTemp * 9.0) / 5.0) + 32.0;

  }

}
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
