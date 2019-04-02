/* parseInt takes a second argument for the radix, which specifies the base of the number in the string
 The radix can be an integer between 2 and 36
 */
 function convertToInteger(str, radix) {
  var radix = 2;
  return parseInt(str, radix)
}

convertToInteger("10011");
