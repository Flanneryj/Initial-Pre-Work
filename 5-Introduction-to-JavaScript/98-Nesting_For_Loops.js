/* f you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays
For the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array.
Learned how to nest for loops and iterate through multi dimensional Arrays
 */

 function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i = 0; i < arr.length; i++){
    for(var r = 0; r < arr[i].length; r++){
      product = product * arr[i][r];
    }
  }
  // Only change code above this line
  return product;
}
// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
