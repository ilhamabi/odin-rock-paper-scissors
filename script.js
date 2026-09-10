let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let number = Math.random();

  if (number < 1/3) {
    return "Rock";
  } else if (number < 2/3 ) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function getHumanChoice() {
  let userInput = prompt("Choose Rock/Paper/Scissors");
  return userInput;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  if (
    (humanChoice === "rock" && computerChoice === "Rock") ||
    (humanChoice === "paper" && computerChoice === "Paper") ||
    (humanChoice === "scissors" && computerChoice === "Scissors")
  )
    console.log(`Tie!, Both choose ${humanChoice} `);
  else if (
    (humanChoice === "rock" && computerChoice === "Paper") ||
    (humanChoice === "scissors" && computerChoice === "Rock") ||
    (humanChoice === "paper" && computerChoice === "Scissors")
  ) {
    console.log(
      `You Lose, you choose ${humanChoice} and computer choose ${computerChoice}`,
    );
    computerScore += 1;
    console.log(`Human Score : ${humanScore}`);
    console.log(`Computer Score : ${computerScore}`);
  } else {
    console.log(
      `You Win! you choose ${humanChoice} and computer choose ${computerChoice}`,
    );
    humanScore += 1;
    console.log(`Human Score : ${humanScore}`);
    console.log(`Computer Score : ${computerScore}`);
  }
}

function playGame(){
  for(let i = 0; i < 5; i++){
    playRound(getHumanChoice(), getComputerChoice()
  )
  }
  if (humanScore > computerScore){
    console.log("You Won,Computer Lose");
  } else if (humanScore < computerScore){
    console.log("You Lose, Computer Won");
  } else {
    console.log("Tie, Both have same score");
  }
}

playGame();