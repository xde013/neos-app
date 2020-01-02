/**
 * NotFoundPage
 *
 * This is the page we show when the user is drunk and gets lost
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default function NotFound() {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ height: '75vh' }}
    >
      <Typography variant="h1">
        <span role="img" aria-label="detective">
          🕵
        </span>
      </Typography>
      <Divider></Divider>
      <Typography variant="h1">Error 404</Typography>
      <Typography variant="h5" gutterBottom>
        What you are looking for is not here!
      </Typography>
      <br />
      <Button
        variant="contained"
        color="primary"
        disableElevation
        component={Link}
        to="/"
      >
        Go back to mommy
      </Button>
    </Grid>
  );
}
