/* You can also generate a random number that falls within a range of two specific numbers
To do this define a minimum number min and a maximum number max
*/

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
