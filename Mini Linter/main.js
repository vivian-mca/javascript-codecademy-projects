let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Step 1: Split string into individual words and save them in a new array
let storyWords = story.split(' ');

// Step 2: Log how many words there are in this story
// console.log(`This paragraph has ${storyWords.length} words.`); // should log 188

// Step 3: Iterate over array to filter unnecessary words
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

// Step 4: Let user know how many times they have used 'overUsedWords'
let overusedWordsCounter = () => {
  let reallyCount = 0;
  let veryCount = 0;
  let basicallyCount = 0;
  for (word of betterWords) {
    if (word === 'really') {
      reallyCount += 1;
    } else if (word === 'very') {
      veryCount += 1;
    } else if (word === 'basically')
      basicallyCount += 1;
  }

  console.log(`'really' count: ${reallyCount}`);
  console.log(`'very' count: ${veryCount}`);
  console.log(`'basically' count: ${basicallyCount}`);
}

// Step 5: Count how many sentences are in the paragraph
let chars = betterWords.join().split(''); // splits words to chars
let sentenceCount = 0;

let sentenceCounter = () => {
  for (char of chars) {
    if (char === '.' || char === '!') {
      sentenceCount += 1;
    }
  }
  console.log(`This paragraph has ${sentenceCount} sentences.`);
};

// Step 6: Log these items to the console: the word count, sentence count, and the nuber of times each overused word appears
console.log(`This paragraph has ${storyWords.length} words.`);
sentenceCounter();
overusedWordsCounter();

// Step 7: Log the 'betterWords' array to the console as a single string
let betterParagraph = betterWords.join(' ');
console.log(betterParagraph);
