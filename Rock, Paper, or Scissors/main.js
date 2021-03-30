//Sets user's choice to rock, paper, or scissors
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error detected! Please type: rock, paper, or scissors. You noob! Get it right!');
  }
};

//Generates computer's choice 
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
      break;

    case 1:
      return 'paper';
      break;

    case 2:
      return 'scissors';
      break;
  }
};

//Determines winner and displays if user won, lost, or tied
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Draw!';
  };

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Try again next time, LOSER!';
    } else {
      return "Winner winner, chimken dinner! That was just luck, don't get cocky!";
    }
  };

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors' || computerChoice === 'rock') {
      return 'Try again next time, LOSER!';
    } else {
      return "Winner winner, chimken dinner! That was just luck, don't get cocky!";
    }
  };

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock' || computerChoice === 'paper') {
      return 'Try again next time, LOSER!';
    } else {
      return "Winner winner, chimken dinner! That was just luck, don't get cocky!";
    }
  };

  if (userChoice === 'bomb') {
    return 'Winner winner, chimken dinner! Who told you the secret cheat code?!';
  };
};

//Executes program and displays result
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();





  

