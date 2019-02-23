import React from 'react';
import PageTemplate from '../components/common/Main/';
import ListWrapper from '../components/list/ListWrapper/';
import PostList from '../components/news/';

const ListPage = () => {
  return (
    <PageTemplate>
      <PostList />
    </PageTemplate>
  );
};

export default ListPage;
