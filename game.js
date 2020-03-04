var randomNumber=0
var buttonColours=["red", "blue", "green", "yellow"]
var randomChosenColour=0
var gamePattern=[]

function nextSequence(){
  randomNumber=Math.floor((Math.random()*4));
  randomChosenColour=buttonColours[randomNumber]
  gamePattern.push(randomChosenColour)
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100)
  var a= new Audio('sounds/'+randomChosenColour+'.mp3').play()
}
