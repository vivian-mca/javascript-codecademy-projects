let userName = ''; //Enter username
userName ? console.log(`Hello, ${userName}!`) : console.log ('Hello!');

let userQuestion = ''; //Enter a question for Magic Eightball

if (userName) {
  console.log(`${userName} asked: ${userQuestion}`);
} else {
  console.log(`The user asked: ${userQuestion}`);
}


let randomNumber = Math.floor(Math.random() * 8); //Generate a random number between 0 and 7
let eightBall = '';

//if..else statements for Magic Eightball phrases based on generated random number
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

/*switch statement for Magic Eightball phrases based on generated random number
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy, try again';
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
  }

console.log(`Magic Eightball answered: ${eightBall}`);
*/
