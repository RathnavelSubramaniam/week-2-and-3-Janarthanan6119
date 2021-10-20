var animal = 'dog';
function myPet() {
  // You should not need to modify this function
  return animal;
}
function yourPet() {
let animal = 'cat';
  
  return animal;
}
//open your browser console to check the results
console.log('myPet result:'  + myPet());
console.log('yourPet result:'  + yourPet());
//Don&#39;t change this line
module.exports = { myPet: myPet, yourPet: yourPet };