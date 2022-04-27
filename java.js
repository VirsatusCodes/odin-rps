  // using strict to build good habits
  "use strict";
  let playerSelection = "rock";
  let computerSelection = "tart";
  let playerScore= 0
  let computerScore= 0
  //creates a random number and assigns the computers choice based on it
  function computerPlay(num) {
    num = Math.random();
    if (num < 0.3 )  return "rock";
    else if (num < 0.6 )  return "paper";
    else return "scissors";
  }
  // gives playerSelection and computerSelection a value and assigns an outcome based on that
  function playRound(playerSelection) {
   computerSelection =computerPlay();
   console.log(playerSelection)
      if (playerSelection === computerSelection) round.textContent = "tie! wow that was a close one... not.";
      else if (playerSelection==="paper" && computerSelection==="rock") round.textContent = "You Win! Paper beats Rock";
      else if (playerSelection==="rock" && computerSelection==="scissors") round.textContent = "You Win! Rock beats Scissors";
      else if (playerSelection==="scissors" && computerSelection==="paper") round.textContent = "You Win! Scissors beats Paper";
      else if (playerSelection==="rock" && computerSelection==="paper") round.textContent = "You Lose! Rock loses to Paper";
      else if (playerSelection==="scissors" && computerSelection==="rock") round.textContent = "You Lose! Scissors lose to Rock";
      else if (playerSelection==="paper" && computerSelection==="scissors") round.textContent = "You Lose! Paper loses to Scissors";
      if (round.textContent.includes("Win")) playerScore += + 1;
      else if (round.textContent.includes("Lose")) computerScore += + 1; 
      outcome.textContent = "Player score is :" + ` ${playerScore}` + " Computer score is :" + ` ${computerScore}`;
      if (playerScore === 5) alert("Harray! you won!");
      else if (computerScore === 5) alert("Oh no, nonono, NOT LIKE THIS! the computer has won!!!");
  }

  const rock = document.querySelector('#rock');
  rock.addEventListener('click', () => {
      playRound("rock")
  });

  const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => {
      playRound("paper")
  });

  const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', () => {
      playRound("scissors")
  });

const roundContainer = document.querySelector('#roundContainer');
const round = document.createElement("p");
round.classList.add("round");
round.textContent = "No game has been played yet!";
roundContainer.appendChild(round);

const outcomeContainer = document.querySelector('#outcomeContainer');
const outcome = document.createElement("p");
outcome.classList.add("outcome");
outcome.textContent = "Player score is :" + ` ${playerScore}` + " Computer score is :" + ` ${computerScore}`;
outcomeContainer.appendChild(outcome);