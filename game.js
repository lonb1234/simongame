var userClickedPattern = [];
var randomNumber=0;
var buttonColours=["red", "blue", "green", "yellow"];
var randomChosenColour=0;
var gamePattern=[];
var level=0;
var userChosenColour=0;
var started=false;
$(".btn").click(function() {

  var userChosenColour= $ (this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSounds(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});


$("body").keydown (function(){
if (!started){
  started=true;
  nextSequence();
};})


function nextSequence(){
  randomNumber=Math.floor((Math.random()*4));
  randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
  playSounds(randomChosenColour);
  level++;
$("#level-title").html("Level " + level);

userClickedPattern=[];
}

function playSounds(name){
     new Audio('sounds/'+name+'.mp3').play();
}

function animatePress(currentColor){
   $("#" + currentColor).addClass("pressed");

setTimeout(function () {
  $("#" + currentColor).removeClass("pressed");
}, 100);
}





function checkAnswer(currentLevel){

  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if (gamePattern.length===userClickedPattern.length){
  setTimeout(function(){nextSequence();
}, 1000);}}


  else{
      startOver()
    new Audio('sounds/wrong.mp3').play()
    $("#level-title").html("Game Over, Press Any Key to Restart.")
      $("body").addClass("game-over")
    setTimeout(function(){
    $("body").removeClass("game-over")
  }, 200);

}
}

function startOver(){
   started=false;
   userClickedPattern = [];
   randomNumber=0
   buttonColours=["red", "blue", "green", "yellow"]
   randomChosenColour=0
   gamePattern=[]
   level=0
   userChosenColour=0

}
// var userChosenColour = $(this).attr("id");
//  userClickedPattern.push(userChosenColour);
//
//  playSounds(userChosenColour);
//  animatePress(userChosenColour);
