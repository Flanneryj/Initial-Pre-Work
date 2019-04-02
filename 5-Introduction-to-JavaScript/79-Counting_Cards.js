/* Using a switch statement chain with multiple identical options and an if else statement im able to iterate through a deck of cards
If the card count is positive it will return a suggestion to bet
If the card count is 0 or negative it will return a suggestion to hold
 */
 var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
   count++;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
   count--;
    break;
  }
  if (count > 0){
    return count + " Bet"
  }else{
    return count + " Hold"
  }

  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
