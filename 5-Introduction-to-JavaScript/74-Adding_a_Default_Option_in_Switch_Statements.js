/* The default statment is executed when no matching case statments are found
A default statement can relate to the end of an if else statement with else
 */

 function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
    return "apple";
    break;
    case "b":
    return "bird";
    break;
    case "c":
    return "cat";
    break;
    default:
    return "stuff";
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
