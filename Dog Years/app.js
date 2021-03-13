//My current age
const myAge = 30;

//early years
let earlyYears = 2;
earlyYears *= 10.5;

//later years
let laterYears = myAge - 2;

//Calculate the number of dog years accounted for by your later years.
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//My age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//My name in lowercase letters
myName  = 'Vivian'.toLowerCase();

//Statement converting my age to my age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)