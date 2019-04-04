/* >Destructuring assignment is special syntax for neatly assigning values taken directly from an object to variables
I used Destructuring assignment to check the average temperature of tomorrow
basically took the key value pair and assigned it to a new argument
 */

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow: tempOfTomorrow } = avgTemperatures // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
