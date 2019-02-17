import React, { Component } from 'react';
import styles from './PostList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { List, Card, Icon, Avatar, Spin, message } from 'antd';
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';

const cx = classNames.bind(styles);

const fakeDataUrl =
  'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

/*
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  });
}
*/

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class PostList extends Component {
  state = {
    data: [],
    loading: false,
    hasMore: true
  };

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results
      });
    });
  }

  fetchData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      }
    });
  };

  handleInfiniteOnLoad = () => {
    let data = this.state.data;
    this.setState({
      loading: true
    });
    if (data.length > 14) {
      message.warning('Infinite List loaded all');
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false
      });
    });
  };

  render() {
    return (
      <div className={cx('infinite-container')}>
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={this.handleInfiniteOnLoad}
          hasMore={!this.state.loading && this.state.hasMore}
          useWindow={true}
        >
          <List
            grid={{
              gutter: 48,
              xs: 1,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 6,
              xxl: 3
            }}
            itemLayout="vertical"
            size="large"
            dataSource={this.state.data}
            renderItem={item => (
              <List.Item
                key={item.id}
                actions={[<IconText type="message" text="2" />]}
                extra={
                  <img
                    width={100}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
              >
                <List.Item.Meta
                  title={<a href="https://ant.design">{item.name.last}</a>}
                />
                <div>Content</div>
              </List.Item>
            )}
          >
            {this.state.loading && this.state.hasMore && (
              <div className={cx('loading-container')}>
                <Spin />
              </div>
            )}
          </List>
        </InfiniteScroll>
      </div>
    );
  }
}

export default PostList;
