import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  card: {
    display: 'flex',
    width: '100%',
    //padding: '1px',
    margin: '10px 0',
    borderBottom: '1px solid grey'
  },
  cardContent: {
    paddingTop: 0,
    width: '80%'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    paddingLeft: '1rem',
    width: '40%',
    margiBottom: 0
  },
  author: {
    display: 'flex',
    flexwrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  progress: {
    margin: theme.spacing.unit * 2
  }
});

class Display extends Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      articles: [],
      loading: false,
      hasMore: true
    };
  }

  componentDidMount() {
    this.getArticles(this.props.default);
  }

  handleInfiniteOnLoad = () => {
    let articles = this.state.articles;
    this.setState({
      loading: true
    });
    if (articles.length > 100) {
      //message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }
    this.getArticles(res => {
      articles = articles.concat(res.results);
      this.setState({
        articles,
        loading: false
      });
    });
  };

  // Lifecycle method
  componentWillMount() {
    this.getArticles(this.props.default);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        url: `https://newsapi.org/v2/top-headlines?sources=${
          nextProps.default
        }&apiKey=3754508a940e4cb19e79bd436d56af79`
      });

      this.getArticles(nextProps.default);
    }
  }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime =
      day +
      '/' +
      month +
      '/' +
      year +
      ' | ' +
      hour +
      ':' +
      (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  getArticles(url) {
    const apiKey = '3754508a940e4cb19e79bd436d56af79';
    // Make HTTP reques with Axios
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?sources=${url}&apiKey=${apiKey}`
      )
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        console.log(articles);

        if (articles != null) {
          this.setState({ articles: articles });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <InfiniteScroll
        initialLoad={false}
        pageStart={0}
        loadMore={this.handleInfiniteOnLoad}
        hasMore={!this.state.loading && this.state.hasMore}
        useWindow={true}
      >
        <Grid container spacing={40} className={classes.cardGrid}>
          {this.state.articles.map((news, i) => {
            return (
              <Grid item key={i} xs={12} md={6}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="title">
                        <a
                          href={news.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {news.title}
                        </a>
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {news.description}
                      </Typography>
                      <Typography className={classes.author}>
                        <p>
                          {' '}
                          By '{news.author ? news.author : this.props.default}'
                        </p>
                        <p>{this.formatDate(news.publishedAt)}</p>
                      </Typography>
                      <Typography variant="subtitle1" color="primary" />
                    </CardContent>
                  </div>
                  <Hidden xsDown>
                    <CardMedia
                      className={classes.cardMedia}
                      image={news.urlToImage} // eslint-disable-line max-len
                    />
                  </Hidden>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        {this.state.loading && this.state.hasMore && (
          <CircularProgress className={classes.progress} />
        )}
      </InfiniteScroll>
    );
  }
}
export default withStyles(styles)(Display);
