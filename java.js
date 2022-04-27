  // using strict to build good habits
  "use strict";
  let num = 14
  let playerSelection = "rock";
  let computerSelection = "tart";
  let score = 0
  
  //creates a random number and assigns the computers choice based on it
  function computerPlay(num) {
    num = Math.random();
    if (num < 0.3 )  return "rock";
    else if (num < 0.6 )  return "paper";
    else return "scissors";
  }
  // gives playerSelection and computerSelection a value and assigns an outcome based on that
  function playRound(playerSelection, computerSelection) {
   playerSelection= prompt("rock, paper, or scissors?").toLowerCase() ;
   computerSelection =computerPlay();
      if (playerSelection === computerSelection) return "tie! wow that was a close one... not.";
      else if (playerSelection==="paper" && computerSelection==="rock") return "You Win! Paper beats Rock";
      else if (playerSelection==="rock" && computerSelection==="scissors") return "You Win! Rock beats Scissors";
      else if (playerSelection==="scissors" && computerSelection==="paper") return "You Win! Scissors beats Paper";
      else if (playerSelection==="rock" && computerSelection==="paper") return "You Lose! Rock loses to Paper";
      else if (playerSelection==="scissors" && computerSelection==="rock") return "You Lose! Scissors lose to Rock";
      else if (playerSelection==="paper" && computerSelection==="scissors") return "You Lose! Paper loses to Scissors";
      else return"Do you think this is some sort of joke??? Instant loss.";
  }
  
  //console.log it acts the same as a call and lets me see the answer.
  // makes the game play 5 times and then give a response based on if youve won or lost overall.
  function game() {
    for (let i = 0; i < 5; i++) {
      if (playRound().includes("Win"))
      score +=  + 1;
      else score += - 1;
      console.log(score);
    }
    if ( score > 0)
    alert("youve won this time...");
    else if (score < 0)
    alert("BWAHHAHA DEATH IT IS");
  }
  //game()
  //playRound(playerSelection, computerSelection)