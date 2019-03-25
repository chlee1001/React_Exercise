// @flow
import React, { Fragment } from 'react';

import PostContainer from '../container/post/PostContainer';
import { type Match } from 'react-router-dom';
//import PlainTemplate from '../components/common/PlainTemplate';

type Props = {
  match: Match
};

const Post = ({ match }: Props) => {
  const { username, urlSlug } = match.params;

  return (
    <Fragment>
      <PostContainer username={username} urlSlug={decodeURI(urlSlug || '')} />
    </Fragment>
  );
};

export default Post;
