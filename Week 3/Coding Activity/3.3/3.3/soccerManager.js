function getPlayingStyle(){
    var firstTeam = [3,3,1,3];
    var secondTeam = firstTeam;
    firstTeam=[4,1,4,1];
    return secondTeam;
}


console.log('results:'  + getPlayingStyle())
/////////////////////////
//don&#39;t change the code under this line
if (typeof module !== undefined) {
  module.exports = getPlayingStyle;
}