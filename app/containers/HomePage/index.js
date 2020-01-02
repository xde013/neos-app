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
import Grow from '@material-ui/core/Grow';
import Typography from '@material-ui/core/Typography';
import { loadNeos as loadNeosAction } from '../App/actions';
import saga from './saga';
import { makeSelectNeosFormatted } from './selectors';
import NeosChart from '../../components/NeosChart';
import OrbitSelect from '../OrbitSelect';
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
      <Grid item xs={12}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h4" gutterBottom>
              Discover NEOs | <em> Near Earth Objects </em>
            </Typography>
          </Grid>
          <Grid item>
            <OrbitSelect />
          </Grid>
        </Grid>
      </Grid>
      <Grow in>
        <Grid item xs={12}>
          <NeosChart neos={neos} />
        </Grid>
      </Grow>
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
