// import { selectOrbitSelectDomain } from '../selectors';
import { makeSelectOrbitFilter, makeSelectNeosOrbits } from '../selectors';

describe('makeSelectOrbitFilter', () => {
  it('should select filter', () => {
    const fixture = 'Test';
    const orbitSelectState = {
      filter: fixture,
    };
    const filter = makeSelectOrbitFilter().resultFunc(orbitSelectState);
    expect(filter).toEqual(fixture);
  });
});

describe('makeSelectNeosOrbits', () => {
  it('should select orbits', () => {
    const neos = [
      {
        close_approach_data: [{ orbiting_body: 'Earth' }],
      },
      {
        close_approach_data: [{ orbiting_body: 'Mars' }],
      },
      {
        close_approach_data: [
          { orbiting_body: 'Earth' },
          { orbiting_body: 'Mars' },
        ],
      },
    ];
    const orbits = makeSelectNeosOrbits().resultFunc(neos);
    expect(orbits).toEqual(['Earth', 'Mars']);
  });
});
