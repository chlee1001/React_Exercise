import React, { Component } from 'react';
import { Layout, Menu, Icon, Button, Dropdown, Input } from 'antd';
import 'antd/dist/antd.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Main.scss';
import Footers from '../Footer';

const cx = classNames.bind(styles);
const { Header, Sider, Content, Footer } = Layout;
const Search = Input.Search;
const SubMenu = Menu.SubMenu;

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class Main extends Component {
  state = {
    collapsed: false
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  // toggle = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed
  //   });
  // };

  render() {
    const { children } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          style={{
            overflow: 'auto',

            left: 0
          }}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className={cx('logo')}>
            <span>
              <Link to="/">reactblog</Link>
            </span>
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Icon type="home" />
              <span>
                <Link to="/">Home</Link>
              </span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="smile" />
              <span>
                <Link to="/about">About</Link>
              </span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="tag" />
              <span>
                <Link to="/tag">Tag</Link>
              </span>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Navigation Two</span>
                </span>
              }
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            className={cx('header')}
            style={{ position: 'fixed', zIndex: 1 }}
          >
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
              className={cx('search')}
            />
            <Dropdown
              overlay={menu}
              trigger={['click']}
              className={cx('userIcon')}
            >
              <Icon type="user" theme="outlined" />
            </Dropdown>
          </Header>

          <Content className={cx('content')}>{children}</Content>
          <Footers />
        </Layout>
      </Layout>
    );
  }
}

export default Main;

/*
          
*/
