import React from 'react';
import { useRequest } from '../lib/helpers';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

//import InfiniteScroll from 'react-infinite-scroller';
import CircularProgress from '@material-ui/core/CircularProgress';
import InfiniteScroll from 'react-simple-infinite-scroll';

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

const formatDate = date => {
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
};

const Post = () => {
  const apiKey = '3754508a940e4cb19e79bd436d56af79';
  const [response, loading, error] = useRequest(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`
  );

  if (loading) {
    return <div>로딩중..</div>;
  }

  if (error) {
    return <div>에러 발생!</div>;
  }

  /*
    컴포넌트가 가장 처음 마운트 되는 시점은, Request 가 시작되지 않았으므로
    loading 이 false 이면서 response 도 null 이기에
    response null 체킹 필요 
  */
  if (!response) return null;

  const articles = response.data.articles;

  return (
    <Grid container spacing={40} className={styles.cardGrid}>
      {articles.map((news, i) => {
        console.log(news.urlToImage);
        return (
          <Grid item key={i} xs={12} md={6}>
            <Card className={styles.card}>
              <div className={styles.cardDetails}>
                <CardContent className={styles.cardContent}>
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
                  <Typography className={styles.author}>
                    By '{news.author ? news.author : this.props.default}'
                    {formatDate(news.publishedAt)}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" />
                  <Hidden xsDown>
                    <CardMedia
                      className={styles.cardMedia}
                      style={{
                        height: 0,
                        paddingTop: '56.25%'
                      }}
                      image={news.urlToImage} // eslint-disable-line max-len
                    />
                  </Hidden>
                </CardContent>
              </div>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default withStyles(styles)(Post);
