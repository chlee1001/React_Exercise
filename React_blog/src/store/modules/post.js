import { createAction, handleActions } from 'redux-actions';
import faker from 'faker';
import { Map } from 'immutable';
import { pender } from 'redux-pender';
import { capitalizeWords } from '../../components/test/helpers/utilities';

const {
  date: { past, recent },
  lorem: { paragraph, paragraphs, slug, words },
  random: { uuid }
} = faker;

// action types
export const INITIALIZE = 'editor/INITIALIZE';
export const FETCH_POSTS = 'test/FETCH_POSTS';
export const RECEIVE_POSTS = 'test/RECEIVE_POSTS';
// action creators
export const initialize = createAction(INITIALIZE);
export const fetch = createAction(FETCH_POSTS);
export const receive = createAction(RECEIVE_POSTS);

// initial state
const initialState = Map({ isFetching: false, items: [] });
// reducer
export default handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [FETCH_POSTS]: (state, action) => {
      return Object.assign({}, state, {
        isFetching: true
      });
    },
    [RECEIVE_POSTS]: (state, action) => {
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.concat(action.posts)
      });
    }
  },
  initialState
);
// generate a list of recent dates sorted in ascending order
const recentDates = Array(50)
  .fill()
  .map(() => recent())
  .sort((date1, date2) => {
    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
  });

/**
 * Receives posts (mocked by faker).
 *
 * @param {Number} [count=1]
 * @param {Object} [options]
 */
const receivePosts = (count = 1, options = {}) => {
  const posts = Array(count)
    .fill()
    .map(() => {
      const summary = paragraph();
      return {
        id: options.id || uuid().split('-')[0],
        title: capitalizeWords(words()),
        summary,
        content: `${summary}\n${paragraphs()}`,
        date: recentDates.pop() || past(),
        slug: options.slug || slug()
      };
    });

  return {
    type: RECEIVE_POSTS,
    posts
  };
};

const POST_COUNT = 10;

/**
 * Fetches 10 posts.
 */
const fetchPosts = () => {
  return dispatch => {
    // emulate api request
    setTimeout(() => dispatch(receivePosts(POST_COUNT)), 1000);
  };
};

/**
 * Fetches post.
 *
 * @param {String} id
 * @param {String} slug
 */
const fetchPost = (id, slug) => {
  return dispatch => {
    // emulate api request
    setTimeout(() => dispatch(receivePosts(1, { id, slug })), 1000);
  };
};
