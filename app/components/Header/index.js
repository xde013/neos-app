import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

function Header() {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Box p={2}>
        <Button
          data-testid="home"
          variant="outlined"
          to="/"
          component={Link}
          color="primary"
          size="large"
        >
          Home
        </Button>
      </Box>

      <Box p={2}>
        <Button
          data-testid="about"
          variant="outlined"
          to="/about"
          component={Link}
          color="primary"
          size="large"
        >
          About
        </Button>
      </Box>
    </Grid>
  );
}

export default Header;
