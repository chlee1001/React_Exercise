import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { fromNow } from '../../lib/common';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    display: 'flex',
    width: '100%',

    // margin: '10px 0',
    borderBottom: '1px solid grey'
  },
  cardGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    position: 'relative',
    marginLeft: '-.875rem',
    marginRight: '-.875rem',
    flexGrow: 1
  },
  cardContent: {
    //margin: '1rem'
    // paddingTop: 0
    // width: '80%'
  },
  contentTitle: {
    // position: 'relative',
    marginBottom: '0.5rem'
  },
  contentauthor: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentDescription: {
    // lineHeight: '0.5rem',
    marginBottom: '0.5rem',
    overflowY: 'hidden'
  },
  contentMore: {
    textAlign: 'right'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: '100%',
    marginBottom: '1rem',
    display: 'block'

    // paddingTop: '50%',
    // marginTop: '1rem'
  },

  progress: {
    margin: theme.spacing.unit * 2
  }
});

class test extends Component {
  render() {
    const { classes } = this.props;
    const { post } = this.props;
    const { id, url_slug, title, body, user, released_at, thumbnail } = post;
    const to = `/@${user.username}/${url_slug}`;
    return (
      <Grid to={to} container spacing={16} className={classes.cardGrid}>
        <Grid item key={id} xs={12} md={6}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent className={classes.cardContent}>
                <Hidden xsDown>
                  {thumbnail && (
                    <img
                      className={classes.cardMedia}
                      src={thumbnail}
                      alt="thumbnail"
                    />
                  )}
                </Hidden>

                <div className={classes.contentTitle}>
                  <Typography variant="title">{title}</Typography>
                </div>
                {/* author & formatDate 간격 수정해야함 */}
                <div className={classes.contentauthor}>
                  <Typography>
                    By '{user.username}'{fromNow(released_at)}
                  </Typography>
                </div>
                <div className={classes.contentDescription}>
                  <Typography variant="subtitle1" color="textSecondary">
                    {body}
                  </Typography>
                </div>
                <div className={classes.contentMore}>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </div>
              </CardContent>
            </div>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

test.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(test);
