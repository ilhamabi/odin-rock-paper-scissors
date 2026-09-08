function getComputerChoice() {
  let number = Math.random();

  if (number <= 0.1) {
    console.log("Rock");
  } else if (number <= 0.5) {
    console.log("Paper");
  } else {
    console.log("Scissors");
  }
}
