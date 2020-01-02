/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { render } from '@testing-library/react';

import NotFoundPage from '../index';

describe('<NotFound />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<NotFoundPage />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render the Page Not Found error text', () => {
    const { queryByText } = render(<NotFoundPage />);
    expect(queryByText('404')).not.toBeNull();
  });
});
