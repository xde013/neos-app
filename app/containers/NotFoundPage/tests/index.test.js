/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createMemoryHistory } from 'history';
import NotFoundPage from '../index';
import configureStore from '../../../configureStore';

describe('<NotFound />', () => {
  const history = createMemoryHistory();
  const store = configureStore({}, history);
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NotFoundPage />
        </ConnectedRouter>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render the Page Not Found error text', () => {
    const { queryByText } = render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NotFoundPage />
        </ConnectedRouter>
      </Provider>,
    );
    expect(queryByText('Error 404')).not.toBeNull();
  });
});
