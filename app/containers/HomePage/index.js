/*
 * HomePage
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import Grid from '@material-ui/core/Grid';
import { loadNeos as loadNeosAction } from '../App/actions';
import saga from './saga';
import { makeSelectNeosFormatted } from './selectors';

const key = 'home';

export function HomePage({ neos, loadNeos }) {
  useInjectSaga({ key, saga });

  useEffect(() => {
    loadNeos();
  }, []);

  return (
    <Grid container spacing={3} style={{ marginBottom: '50px' }}>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="homepage" />
      </Helmet>
      {JSON.stringify(neos)}
    </Grid>
  );
}

HomePage.propTypes = {
  neos: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]).isRequired,
  loadNeos: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  neos: makeSelectNeosFormatted(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    loadNeos: () => dispatch(loadNeosAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect, memo)(HomePage);
