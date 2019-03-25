// @flow
import React, { Component, Fragment } from 'react';
import PostHead from '../../components/post/PostHead';
import PostContent from '../../components/post/PostContent';
import PostTags from '../../components/post/PostTags';
import { PostsActions } from '../../store/actionCreators';
import type { State } from '../../store';
import { connect } from 'react-redux';
import type { PostData, TocItem } from '../../store/modules/post';
import PostToc from '../../components/post/PostToc';
import QuestionModal from '../../components/common/QuestionModal/QuestionModal';
import {
  withRouter,
  type ContextRouter,
  type Location
} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { convertToPlainText } from '../../lib/common';
import PostPlaceholder from '../../components/post/PostPlaceholder';
import throttle from 'lodash/throttle';
// import PostLeftSticker from '../../components/post/PostLeftSticker/PostLeftSticker';
// import PostSeriesInfo from '../../components/post/PostSeriesInfo/PostSeriesInfo';

type Props = {
  username: ?string,
  urlSlug: ?string,
  post: ?PostData,
  toc: ?(TocItem[]),
  activeHeading: ?string,
  likeInProcess: boolean,
  currentUsername: ?string,
  askRemove: boolean,
  routerHistory: Location[]
} & ContextRouter;

class PostContainer extends Component<Props> {
  initialize = async () => {
    // set scroll to top
    if (document.body && document.body.scrollTop) {
      document.body.scrollTop = 0;
    }
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    const { username, urlSlug } = this.props;
    if (!username || !urlSlug) return;
    try {
      await this.props.readPost({
        username,
        urlSlug
      });
      if (!this.props.post) return;
      const { id } = this.props.post;
      PostsActions.getSequences(id);
    } catch (e) {
      console.log(e);
      if (e && e.response && e.response.status === 404) {
        PostsActions.history.replace('/404');
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.urlSlug !== this.props.urlSlug) {
      PostsActions.unloadPost();
      this.initialize();
    }
  }

  componentWillUnmount() {
    PostsActions.unloadPost();
  }

  componentDidMount() {
    this.initialize();
    const { hash } = this.props.location;
    if (hash !== '') {
      PostsActions.activateHeading(decodeURI(hash.split('#')[1]));
    }
  }

  render() {
    const {
      post,
      toc,
      activeHeading,
      username,
      currentUsername,
      askRemove,
      logged
    } = this.props;
    const { onSetToc, onActivateHeading } = this;

    if (!post) return <PostPlaceholder />;
    if (!post.user) return <PostPlaceholder />;
    const plainTextBody = convertToPlainText(post.body);

    const url = `https://velog.io/@${post.user.username}/${post.url_slug}`;
    return (
      <Fragment>
        <Helmet>
          <title>{post.title}</title>
          <meta name="description" content={plainTextBody} />
          <link rel="canonical" href={url} />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={plainTextBody} />
          {post.thumbnail && (
            <meta property="og:image" content={post.thumbnail} />
          )}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={plainTextBody} />
          {post.thumbnail && (
            <meta name="twitter:image" content={post.thumbnail} />
          )}
        </Helmet>
        {console.log(post)};
        <PostHead
          id={post.id}
          date={post.released_at}
          title={post.title}
          tags={post.tags}
          categories={post.categories}
          user={post.user}
          url={this.props.match.url}
          informCopy={this.informCopy}
        />
        <PostContent
          thumbnail={post.thumbnail}
          body={post.body}
          onSetToc={onSetToc}
          onActivateHeading={onActivateHeading}
          theme={post.meta.code_theme}
        />
        <PostTags tags={post.tags} />
      </Fragment>
    );
  }
}

export default connect(
  ({ posts, pender, user, common }: State) => ({
    //  currentUsername: user.user && user.user.username,
    post: posts.post
    // toc: posts.toc,
    // activeHeading: posts.activeHeading,
    //  askRemove: posts.askRemove,
    // routerHistory: common.router.history
    // logged: !!user.user
  }),
  () => ({})
)(withRouter(PostContainer));
