const playerResult = document.getElementById('playerResult');
const computerResult = document.getElementById('computerResult');
const results = document.getElementById('result');

const gameBtns = document.querySelectorAll(".gameBtn");
let player;
let computer;
let result;


gameBtns.forEach( button => button.addEventListener('click', () => {

  player = button.textContent;
  computerTurn();
  playerResult.textContent = `Player: ${player}`; 
  computerResult.textContent = `Computer: ${computer}`;
  results.textContent = `Result: ${checkWinner()}`;
}));

function computerTurn() {

  computer = Math.floor(Math.random() * 3) + 1;

  switch(computer) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

function checkWinner() {
  if(player == computer) {
    return "DRAW!";
  }
  else if(computer == "ROCK") {
    return (player == "PAPER") ? "You Win!" : "You Lose!";
  }
  else if(computer == "PAPER") {
    return (player == "SCISSORS") ? "You Win!" : "You Lose!";
  }
  else if(computer == "SCISSORS") {
    return (player == "ROCK") ? "You Win!" : "You Lose!";
  }
}