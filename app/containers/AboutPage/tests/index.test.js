import React from 'react';
import { render } from '@testing-library/react';

import AboutPage from '../index';

describe('<AboutPage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(<AboutPage />);

    expect(firstChild).toMatchSnapshot();
  });
});
