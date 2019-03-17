import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/api';
import { applyPenders } from 'redux-pender';
import { updateObject } from '../../lib/common';

const GET_TRENDING_POSTS = 'list/GET_TRENDING_POSTS';
const GET_MORE_POSTS = 'post/GET_COMMENTS';

export const getTrendingPosts = createAction(
  GET_TRENDING_POSTS,
  api.getTrendingPosts
);
export const getMorePosts = createAction(GET_MORE_POSTS, api.getMorePosts);

const initialState = {
  posts: null
};

const reducer = handleActions({}, initialState);
export default applyPenders(reducer, [
  {
    type: GET_TRENDING_POSTS,
    onSuccess: (state, action) => {
      return updateObject(state, { posts: action.payload.data });
    }
  },
  {
    type: GET_MORE_POSTS,
    onSuccess: (state, action) => {
      return updateObject(state, { posts: action.payload.data });
    }
  }
]);
