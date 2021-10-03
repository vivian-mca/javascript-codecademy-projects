// Returns any given night's number of hours of rest
const getSleepHours = day => {
  day = day.toLowerCase();
  switch (day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 5;
      break;
    case 'friday':
      return 4;
      break;
    case 'saturday':
      return 9;
      break;
    case 'sunday':
      return 8;
      break;
    default:
      return 'Error: Not a valid day'
  };
};

// Returns the total sleep hours that you actually slept
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

// Returns the preferred ideal sleep hours
const getIdealSleepHours = idealHours => idealHours * 7;

// Calculates the sleep debt, if any
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + 'hour(s) more sleep than needed.');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  };
};

calculateSleepDebt();
