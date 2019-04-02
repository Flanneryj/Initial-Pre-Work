/* .hasOwnProperty checks to see if a given object has a property name it return with a true or false statement */
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp) == true) {
  return myObj[checkProp];
}else{
  return "Not Found";
}
}
// Test your code by modifying these values
checkObj("gift");
