/* eslint-disable react/jsx-props-no-spreading */
/**
 * Home Test
 */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import { HomePage, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';

describe('<HomePage />', () => {
  let store;
  let props;
  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  beforeEach(() => {
    props = {
      loading: false,
      error: false,
      loadNeos: jest.fn(),
      neos: [],
    };
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Provider store={store}>
        <HomePage {...props} />
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <HomePage {...props} />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  it('should fetch the neos on mount', () => {
    const loadNeosSpy = jest.fn();

    render(
      <Provider store={store}>
        <HomePage {...{ ...props, loadNeos: loadNeosSpy }} />
      </Provider>,
    );
    expect(loadNeosSpy).toHaveBeenCalled();
  });

  describe('Props', () => {
    describe('loadNeos', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.loadNeos).toBeDefined();
      });
    });
  });
});
