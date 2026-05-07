const score1 = 85;
const score2 = 92;
const score3 = 78;
const score4 = 88;
const score5 = 95;

const sum = score1 + score2 + score3 + score4 + score5;
const average = sum / 5;
console.log("Average:", average);

let highest = score1;
if (score2 > highest) highest = score2;
if (score3 > highest) highest = score3;
if (score4 > highest) highest = score4;
if (score5 > highest) highest = score5;
console.log("Highest:", highest);


// Store all scores in a single array
const scores = [85, 92, 78, 88, 95];

// Function to calculate the average score
const calculateAverage = (numbers) => {
  let sum = 0;

  // Add each number to the running total
  for (const number of numbers) {
    sum += number;
  }

  // Return the average
  return sum / numbers.length;
};

// Function to find the highest score
const findHighestScore = (numbers) => {
  // Start with the first score as the highest
  let highest = numbers[0];

  // Compare each score to the current highest
  for (const number of numbers) {
    if (number > highest) {
      highest = number;
    }
  }

  return highest;
};

// Compute results using the functions
const average = calculateAverage(scores);
const highest = findHighestScore(scores);

// Display results
console.log("Average:", average);
console.log("Highest:", highest);

