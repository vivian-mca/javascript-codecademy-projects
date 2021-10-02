// Input age
const myAge = 28;

// The first two years of a dog's life
let earlyYears = 2;
earlyYears *= 10.5;

// Accounts for the first two years
let laterYears = myAge - 2;

// Number of dog years accounted for by your later years
laterYears *= 4;

// Checkpoint
console.log(earlyYears);
console.log(laterYears);

// Age in dog years
const myAgeinDogYears = earlyYears + laterYears;

// Name in lowercase letters
const myName = 'Vivian'.toLowerCase();

// Statement that displays your name and age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeinDogYears} years old in dog years.`);
