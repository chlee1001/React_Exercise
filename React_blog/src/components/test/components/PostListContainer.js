import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import PostList from './PostList';
import { bindActionCreators } from 'redux';
import * as postActions from '../../../store/modules/post';

class PostListContainer extends Component {
  fetchP = ({ isFetching, items }) => {
    const { PostActions } = this.props;
    PostActions.receive({ isFetching, items });
  };

  render() {
    return <PostList isLoading={fetch.isFetching} posts={fetch.items} />;
  }
}

export default connect(
  state => ({
    fetchPosts: state.post.get('fetchPosts'),
    isLoading: state.post.get('isLoading'),
    posts: state.post.get('posts')
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
