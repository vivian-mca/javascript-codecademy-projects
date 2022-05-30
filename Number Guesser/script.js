let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates the new secret target number
const generateTarget = () => Math.floor(Math.random() * 10);

// Calculates the distance from the computer guess to the target and from the human guess to the target
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

// Determines which guess is closest to the target number
const compareGuesses = (humanGuess, cpuGuess, target) => {
  const humanDiff = getAbsoluteDistance(humanGuess, target);
  const cpuDiff = getAbsoluteDistance(cpuGuess, target);
  if (humanGuess < 0 || humanGuess > 10) {
    return alert(
      "Your number is out of range. Please enter a number between 0 and 9."
    );
  } else {
    return humanDiff <= cpuDiff;
  }
};

// Increases the winner's score after each round
const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
};

// Updates the round number after each round
const advanceRound = () => currentRoundNumber++;
