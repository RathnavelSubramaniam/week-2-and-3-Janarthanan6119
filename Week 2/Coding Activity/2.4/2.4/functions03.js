/*
Follow the instructions - Create a function called "isString" that takes 3 arguments (x1, x2, x3)
- check if each argument is a string using typeof.
- If each argument is a string, return "strings"
- If each argument is NOT a string, return "not strings"

*/
function isString(a,b,c)

{
    var a="Hari";
    var b="puppy";
    var c="28";
    
    {
        if( ((typeof a)=="string") && ((typeof b)=="string") && ((typeof c)=="string"))
        {
          return "strings";
        }
        else
        {
          return "not strings";
        }
    
    }
    
}



//open the browser console to check results
console.log('results: ', isString('a', 'b', 'c'));

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = isString;
}
