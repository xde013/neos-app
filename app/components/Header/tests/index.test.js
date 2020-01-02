import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createMemoryHistory } from 'history';

import Header from '../index';
import configureStore from '../../../configureStore';

describe('<Header />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);

  it('should match snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
        </ConnectedRouter>
      </Provider>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should have link to Home page', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
        </ConnectedRouter>
      </Provider>,
    );

    expect(queryByTestId(/home/i)).toBeTruthy();
  });

  it('should have link to About page', () => {
    const { queryByTestId } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header />
        </ConnectedRouter>
      </Provider>,
    );

    expect(queryByTestId(/about/)).toBeTruthy();
  });
});
