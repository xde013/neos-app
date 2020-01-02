/**
 *
 * Tests for NeosChart
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import NeosChart from '../index';

describe('<NeosChart />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<NeosChart neos={[]} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<NeosChart neos={[]} />);
    expect(firstChild).toMatchSnapshot();
  });
});
