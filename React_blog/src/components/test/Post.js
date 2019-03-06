import React, { Component } from 'react';
import { List, ListItem } from '@material-ui/core/List';
import { randomUsers } from './data';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    display: 'flex',
    width: '100%',

    // margin: '10px 0',
    borderBottom: '1px solid grey'
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
    paddingTop: '50%',
    marginTop: '1rem'
  },

  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Post extends Component {
  state = {
    refreshing: false,
    data: randomUsers(20)
  };

  onEndReached = () => {
    this.setState(state => ({
      data: [...state.data, ...randomUsers()]
    }));
  };

  onRefresh = () => {
    this.setState({
      data: randomUsers(20)
    });
  };

  render() {
    const { classes } = this.props;
    const item = this.state.data;
    console.log(item);
    return (
      <Grid container spacing={40} className={classes.cardGrid}>
        {item.map((items, i) => {
          return (
            <Grid item key={i} xs={12} md={6}>
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent className={classes.cardContent}>
                    <div>
                      <Typography variant="title">{items.title}</Typography>
                    </div>
                    <div>
                      <Typography variant="subtitle1" color="textSecondary">
                        {items.content}
                      </Typography>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}
/*  <List>
        data={this.state.data}
        initialNumToRender={20}
        onEndReachedThreshold={1}
        onEndReached={this.onEndReached}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh}
        renderItem=
        {({ item }) => {
          return (
            <ListItem
              roundAvatar
              avatar={{ uri: item.avatar }}
              title={item.name}
            />
          );
        }}
        />
      </List>*/

Post.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Post);
