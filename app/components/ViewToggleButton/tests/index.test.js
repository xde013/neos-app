/**
 *
 * Tests for ViewToggleButton
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import ViewToggleButton from '../index';

describe('<ViewToggleButton />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ViewToggleButton toggleHandler={() => {}} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<ViewToggleButton toggleHandler={() => {}} />);
    expect(firstChild).toMatchSnapshot();
  });
});
