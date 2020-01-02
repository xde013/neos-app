import { makeSelectNeosFiltered } from '../selectors';

describe('makeSelectNeosFiltered', () => {
  const EARTH = 'Earth';
  const MARS = 'Mars';
  let neos;
  let neoEarth;
  let neoMars;
  let neoEarthMars;
  beforeAll(() => {
    neoEarth = {
      close_approach_data: [
        {
          orbiting_body: EARTH,
        },
      ],
    };
    neoMars = {
      close_approach_data: [
        {
          orbiting_body: MARS,
        },
      ],
    };
    neoEarthMars = {
      close_approach_data: [
        {
          orbiting_body: EARTH,
        },
        {
          orbiting_body: MARS,
        },
      ],
    };
    neos = [neoEarth, neoMars, neoEarthMars];
  });
  it('should filter ALL neos', () => {
    const result = makeSelectNeosFiltered.resultFunc(neos, '');
    expect(result).toEqual(neos);
  });
  it('should filter neos orbiting Earth', () => {
    const result = makeSelectNeosFiltered.resultFunc(neos, EARTH);
    expect(result).toEqual([neoEarth, neoEarthMars]);
  });
  it('should filter neos orbiting Mars', () => {
    const result = makeSelectNeosFiltered.resultFunc(neos, MARS);
    expect(result).toEqual([neoMars, neoEarthMars]);
  });
});
