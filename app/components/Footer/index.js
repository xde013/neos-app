import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    background: '#e5e5e5',
    padding: '1em',
  },
});
function Footer() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Typography variant="body2">
        This Project is under Do What TheFuck You Want to Public License.
      </Typography>
      <Typography variant="subtitle2">
        Made with{' '}
        <span role="img" aria-label="heart">
          💖
        </span>{' '}
        by Ryan Bourhil
      </Typography>
    </Grid>
  );
}

export default Footer;
