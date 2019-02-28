import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faFacebookF,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
//import '../../lib/icons.js';

const styles = theme => ({
  root: {
    display: 'flex',
    padding: '1rem'
    // backgroundColor: theme.palette.secondary.light
  },
  iconsWrapper: {
    height: 120,
    width: '100%',
    justifyContent: 'center'
  },
  icons: {
    display: 'flex'
  },
  icon: {
    width: 32,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: theme.palette.warning.main,
    '&:hover': {
      //   backgroundColor: theme.palette.warning.dark
    }
  }
});

const Footer = ({ classes }) => (
  <Typography component="footer" className={classes.root}>
    <Grid container spacing={40}>
      <Grid item xs={6} sm={4} md={2}>
        <Grid container className={classes.iconsWrapper} spacing={16}>
          <Grid item className={classes.icons}>
            <a href="https://material-ui.com/" className={classes.icon}>
              <FontAwesomeIcon icon={faFacebookF} size="md" />
            </a>
            <a href="https://material-ui.com/" className={classes.icon}>
              <FontAwesomeIcon icon={faGithub} size="md" />
            </a>
            <a href="https://twitter.com/MaterialUI" className={classes.icon}>
              <FontAwesomeIcon icon={faInstagram} size="md" />
            </a>
          </Grid>
          <Grid item>© 2019 ChaeHyeon</Grid>
        </Grid>
      </Grid>
    </Grid>
  </Typography>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
