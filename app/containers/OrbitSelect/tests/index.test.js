/* eslint-disable react/jsx-props-no-spreading */
/**
 *
 * Tests for OrbitSelect
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router-dom';
import configureStore from '../../../configureStore';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { OrbitSelect, mapDispatchToProps } from '../index';

describe('<OrbitSelect />', () => {
  let store;
  let props;

  beforeAll(() => {
    store = configureStore({}, browserHistory);
  });

  beforeEach(() => {
    props = {
      orbits: [],
      setFilter: jest.fn(),
      filter: '',
    };
  });
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <Provider store={store}>
        <OrbitSelect {...props} />
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <OrbitSelect {...props} />
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });

  describe('Props', () => {
    describe('setFilter', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.setFilter).toBeDefined();
      });
    });
  });
});
