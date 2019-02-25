import React, { useState, useRef } from 'react';
import axios from 'axios';
import { GitRepo } from './test';
import { useInfiniteScroll } from '../lib/useInfiniteScroll';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

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

export const GitReposFeed = () => {
  const [items, setItems] = useState([]);
  const [lastLoadedItem, setLastLoadedItem] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef();
  const url = 'https://api.github.com/repositories';
  useInfiniteScroll(
    listRef,
    () => isLoading,
    () => {
      setIsLoading(true);
      axios
        .get(url, {
          params: {
            since: lastLoadedItem
          }
        })
        .then(({ data }) => {
          setItems([...items, ...data]);
          setLastLoadedItem(data[10].id);
          setIsLoading(false);
        });
    }
  );
  console.log(listRef);
  return items.length ? (
    <Grid container spacing={40} className={styles.cardGrid} ref={listRef}>
      {items.map((item, i) => (
        <Grid item key={i} xs={12} md={6}>
          <Card className={styles.card}>
            <div className={styles.cardDetails}>
              <CardContent className={styles.cardContent}>
                <Typography variant="title">
                  <GitRepo repo={item} />
                </Typography>
              </CardContent>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  ) : (
    'Loading...'
  );
};
