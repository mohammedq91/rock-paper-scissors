//place rock, paper, scissors,

var rock = document.getElementById('rock').addEventListener('click',play);
var paper = document.getElementById('paper').addEventListener('click', play);
var scissor = document.getElementById('scissor').addEventListener('click', play);
var userChoies = prompt("do u choice")

var playerChoice;
var computerChoice;


function play(e){
  console.log('You clicked me!')
  e.preventDefault()
  computerPlay();
  userPlayer()
  
};

function computerPlay(){
  var randomNumber = Math.random();
  console.log(randomNumber)

  if (randomNumber <= 0.33){
    computerChoice = "rock";
  } else if (randomNumber > 0.33 && randomNumber <= 0.66){
    computerChoice = "paper";
  } else 
    computerChoice = "scissor"
};


