let response;
let age = 15;

function isOldEnoughToVote(age) {
  if(age>=18)
  {
    response='Eligible to vote';
  }
  else
   {
     response='Not Eligible to vote';
    }
  
  
  return response;
}
//open the browser console to check results
console.log('results:', isOldEnoughToVote());
// Don&#39;t edit the code below here
if (typeof module!=='undefined') {
  module.exports = isOldEnoughToVote;
}
