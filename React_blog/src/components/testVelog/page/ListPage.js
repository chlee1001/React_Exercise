import React from 'react';
import PageTemplate from '../../common/Main/';
import ListTemplate from '../list/ListTemplate';
import PostListContainer from '../../../container/post/PostListContainer';

const ListPage = () => {
  return (
    <PageTemplate>
      <ListTemplate>
        <PostListContainer />
      </ListTemplate>
    </PageTemplate>
  );
};

export default ListPage;
