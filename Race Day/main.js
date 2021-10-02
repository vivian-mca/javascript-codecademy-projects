let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 21;

// Generates race numbers for adults who registered early
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
};

// Start time and race number statements for runners
if (age > 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber}. Your race will begin at 9:30 am.`);
} else if (age > 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber}. Your race will begin at 11:00 am.`);
} else if (age < 18) {
  console.log(`Your race number is ${raceNumber}. Your race will begin at 12:30 pm.`);
} else {
  console.log(`Please see the registration desk for support.`);
};
