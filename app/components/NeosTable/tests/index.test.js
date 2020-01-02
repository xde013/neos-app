/**
 *
 * Tests for NeosTable
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
import NeosTable from '../index';

describe('<NeosTable />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<NeosTable neos={[]} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render a Table', async () => {
    const { queryByTestId } = render(<NeosTable neos={[]} />);

    expect(queryByTestId(/table/i)).toBeTruthy();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<NeosTable neos={[]} />);
    expect(firstChild).toMatchSnapshot();
  });
});
