let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 18;

//Early adults receive a race number at or above 1000
if (registeredEarly && age > 18) {
  raceNumber += 1000;
};

//Assigns time of race and race number
if (registeredEarly && age > 18) {
  console.log(`Your race will start at 9:30 am. Your race number is ${raceNumber}.`);
} else if (!registeredEarly && age > 18) {
  console.log(`Your race will start at 11:00 am. Your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`Your race will start at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk for more information.');
};


