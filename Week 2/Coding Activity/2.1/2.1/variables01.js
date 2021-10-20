var myFriend="Janathul";
function greetings() {
  return(myFriend);
}
 //leave this line unchanged to console log the results
console.log('results:',greetings())
 //don't change this line
if (typeof module !== 'undefined') {
  module.exports = greetings;
}