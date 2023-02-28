import { describe, expect, it } from 'vitest';
import { lowMoonsPlanets } from '../exercises/e11';
import { data } from '../data/data';

describe('lowMoonsPlanets', () => {
  it('Should exist', () => {
    expect(lowMoonsPlanets).toBeInstanceOf(Function);
  });
  it('Should return an array of 2 items', () => {
    expect(lowMoonsPlanets(data.planets).length).toEqual(4);
  });
  it("The items names should be 'Mars', 'Mercure', 'Earth' and 'Vénus'", () => {
    expect(lowMoonsPlanets(data.planets).map((p) => p.name)).toEqual([
      'Mars',
      'Mercure',
      'Earth',
      'Vénus',
    ]);
  });
});
