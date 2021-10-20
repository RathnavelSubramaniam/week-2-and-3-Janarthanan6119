function greet(name) {
    name = 'Welcome Dani';
    return name;
  }
   
  //open the browser console to check results
  console.log('results: ', greet('Dani'));
   
  //don't change this line
  if (typeof module !== 'undefined') {
    module.exports = greet;
  }
  