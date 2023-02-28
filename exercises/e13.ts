// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

import { Asteroid, Planet } from '../data/data';

interface Data {
  planets: Planet[];
  asteroids: Asteroid[];
}

export function getAveragePlanetsTemperature(data: Data) {
  const sum: number = data.planets.reduce((acc, curr) => acc + curr.avgTemp, 0);
  return sum / data.planets.length;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
