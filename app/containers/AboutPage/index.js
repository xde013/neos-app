/* eslint-disable jsx-a11y/anchor-is-valid */
/*
 * About Pages
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export const AboutPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Helmet>
        <title>About Page</title>
        <meta name="description" content="About page" />
      </Helmet>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: '75vh' }}
      >
        <Grid item xs={6}>
          <Paper variant="outlined" square style={{ background: '#e5e5e5' }}>
            <Box p={4}>
              <Typography variant="h2" gutterBottom>
                About <InfoIcon fontSize="large" />
              </Typography>
              <Typography variant="body1">
                This is a test project made with React focused on performance
                and best practices, showcasing{' '}
                <Link
                  variant="body1"
                  component="button"
                  color="primary"
                  underline="none"
                  onClick={handleClickOpen}
                >
                  NEOs (Near Earth Objects)
                </Link>{' '}
                data provided by
                <em> NASA</em>.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="info-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">What are NEOs?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Near-Earth objects (NEOs) are asteroids or comets of sizes ranging
            from metres to tens of kilometres that orbit the Sun and whose
            orbits come close to that of Earth&apos;s. Of the more than 600 000
            known asteroids in our Solar System, more than 20 000 are NEOs.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AboutPage;
