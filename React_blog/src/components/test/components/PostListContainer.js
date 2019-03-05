import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import PostList from './PostList';
import { bindActionCreators } from 'redux';
import * as postActions from '../redux/test';

class PostListContainer extends Component {
  FETCH_POSTS = ({ isFetching, items }) => {
    const { PostActions } = this.props;
    PostActions.changeInput({ isFetching, items });
  };

  render() {
    const { fetchPosts, isLoading, posts } = this.props;
    const { id, title, summary, date, slug } = this.props;

    return <PostList id={id} title={title} summary={summary} />;
  }
}

export default connect(
  state => ({
    fetchPosts: state.test.get('fetchPosts'),
    isLoading: state.test.get('isLoading'),
    posts: state.test.get('posts')
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(PostListContainer);

// const mapStateToProps = state => {
//   const {
//     posts: { isFetching, items }
//   } = state;
//   return {
//     isLoading: isFetching,
//     posts: items
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   fetchPosts: () => dispatch(fetchPosts())
// });

// const wrapper = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );
// const PostListContainer = wrapper(PostList);
// export default PostListContainer;
