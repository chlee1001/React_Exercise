import React from 'react';
import PostItem from './test';
import CircularProgress from '@material-ui/core/CircularProgress';

const PostList = ({ posts }) => {
  if (!posts) return <CircularProgress />;
  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
