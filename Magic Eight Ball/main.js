// Input username option
let userName = '';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

// Input a question the user wants to ask the Magic Eight Ball
let userQuestion = '';
console.log(`The user asked: ${userQuestion}`);

// Generates a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

// Magic Eight Ball statements based on generated number from randomNumber
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'Invalid';
    break;
};

/* Alternate solution using if..else statements for Magic Eight Ball statements based on generated number from randomNumber
if (randomNumber = 0) {
  console.log('It is certain');
} else if (randomNumber = 1) {
  console.log ('It is decidedly so');
} else if (randomNumber = 2) {
  console.log ('Reply hazy, try again');
} else if (randomNumber = 3) {
  console.log ('Cannot predict now');
} else if (randomNumber = 4) {
  console.log ('Do not count on it');
} else if (randomNumber = 5) {
  console.log ('My sources say no');
} else if (randomNumber = 6) {
  console.log ('Outlook not so good');
} else {
  console.log ('Signs point to yes')
}
*/

// Magic Eight Ball's response
console.log(`The Magic Eight Ball answered: ${eightBall}`);
