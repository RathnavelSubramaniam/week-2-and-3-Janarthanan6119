var scottishCity = ['Glasgow'];
var americanCity = scottishCity;
americanCity='New'+americanCity;
console.log(scottishCity);
console.log(americanCity);
if (typeof module!=='undefined'){
    module.exports ={scottishCity,americanCity};
}