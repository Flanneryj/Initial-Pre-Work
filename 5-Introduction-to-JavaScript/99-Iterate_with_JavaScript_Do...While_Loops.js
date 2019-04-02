/* A do...while loop is "do" one pass of the code inside the loop no matter what, and then it runs "while" a specified condition is true and stops once that condition is no longer true
Initialize the value of i as 10
Add one element to the array and increment i
if i < 5 see that i is now 11, which fails the conditional check. So we exit the loop and are done
*/

//Setup
var myArray = [];
var i = 10;

// Only change code below this line.
do{
  myArray.push(i);
  i++;
} while (i < 5)
