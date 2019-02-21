import { connect } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import PostLists from './PostLists';

const mapStateToProps = state => {
  const {
    posts: { isFetching, items }
  } = state;
  return {
    isLoading: isFetching,
    posts: items
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

const wrapper = connect(
  mapStateToProps,
  mapDispatchToProps
);
const PostListContainer = wrapper(PostLists);
export default PostListContainer;
