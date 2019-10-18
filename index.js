var lives = 5;
var rings = 0;

var btnOne = document.getElementById("btnOne").addEventListener("click", function(){
  document.getElementById('placeholder').src = "placeholder2.jpg";

  rings = rings + 10;
  document.getElementById("rings").innerHTML = rings;

});

var btnTwo = document.getElementById("btnTwo").addEventListener("click", function(){
  document.getElementById('placeholder').src = "placeholder2.jpg";

  lives = lives - 1;
  document.getElementById("lives").innerHTML = lives;

});
