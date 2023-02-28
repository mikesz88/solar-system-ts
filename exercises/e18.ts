// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from '../data/data';
import { maxBy } from './e17';

interface AsteroidDiscoveryCount {
  [key: number]: number;
}

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  const annualAsteroidsCount = asteroids.reduce(
    (accumulator: AsteroidDiscoveryCount, currentAsteroid: Asteroid) => {
      const year = currentAsteroid.discoveryYear;
      if (accumulator[year]) {
        return {
          ...accumulator,
          [year]: (accumulator[year] as number) + 1,
        };
      } else {
        return {
          ...accumulator,
          [year]: 1,
        };
      }
    },
    {}
  );
  return +(maxBy(
    Object.keys(annualAsteroidsCount),
    (year: string) => annualAsteroidsCount[+year] as number
  ) as string);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
