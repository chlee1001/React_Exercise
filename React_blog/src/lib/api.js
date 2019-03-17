import axios from 'axios';

const client = axios.create({
  baseURL: 'https://uvvg89p68d.execute-api.ap-northeast-2.amazonaws.com/dev'
});
//?offset=20
//?offset=40.....
export const getTrendingPosts = () => client.get('/posts/trending');

export const getMorePosts = offset =>
  client.get(`/posts/trending?offset=${offset}`);

export const getPost = ({ username, urlSlug }) =>
  client.get(`/posts/@${username}/${urlSlug}`);

export const getComments = postId => client.get(`/posts/${postId}/comments`);
