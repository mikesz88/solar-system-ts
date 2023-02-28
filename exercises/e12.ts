// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

import { Asteroid, Planet } from '../data/data';

interface Data {
  planets: Planet[];
  asteroids: Asteroid[];
}

export const allPlanetsMoonsCount = (data: Data) => {
  let totalMoons: number = 0;
  data.planets.forEach((planet: Planet) => {
    if (planet.moons) {
      totalMoons += planet.moons.length;
    }
  });
  return totalMoons;
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
