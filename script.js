const choices = ["rock", "paper", "scissor"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  if (playerChoice === computerChoice) {
    result = "it's tie";
  } else {
    switch (playerChoice) {
      case "rock":
        result =
          computerChoice === "scissor" ? "you win!!" : "you lose! try again";
        break;
      case "paper":
        result =
          computerChoice === "rock" ? "you win!!" : "you lose! try again";
        break;
      case "scissor":
        result =
          computerChoice === "paper" ? "you win!!" : "you lose! try again";
        break;
    }
  }
  playerDisplay.textContent = `player:${playerChoice}`;
  computerDisplay.textContent = `computer:${computerChoice}`;
  resultDisplay.textContent = result;
}
