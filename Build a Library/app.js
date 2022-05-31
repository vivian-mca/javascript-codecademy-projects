class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }

  // If `isCheckedOut` value is `true`, change to false, and vice versa
  toggleCheckOutStatus() {
    this.isCheckedOut = !this.isCheckedOut;
  }

  getAverageRating() {
    let ratingsSum = this.ratings.reduce((a, b) => a + b, 0);
    let average = ratingsSum / this.ratings.length;
    return average.toFixed(2); // limits avg to 2 decimal places
  }

  addRating(rating) {
    this.ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// Create new instance of Book, check it out and add ratings
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckedOut); // Should log 'true'

historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating()); // Should log '4.67'

// Create new instance of Movie, check it out and add ratings
const speed = new Movie("Jan de Bont", "Speed", 116);

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut); // Should log 'true'

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating()); // Should log '2.33'
