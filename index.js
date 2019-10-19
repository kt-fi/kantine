var lives = 5;
var points = 0;

var btnOne = document.getElementById("btnOne").addEventListener("click", function(){
  document.getElementById('placeholder').src = "sonic_ring.gif";

  points = points + 10;
  document.getElementById("points").innerHTML = points;

});

var btnTwo = document.getElementById("btnTwo").addEventListener("click", function(){
  document.getElementById('placeholder').src = "sonic_dead.jpg";

  lives = lives - 1;
  document.getElementById("lives").innerHTML = lives;

});
