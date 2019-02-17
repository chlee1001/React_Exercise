import React, { Component } from 'react';
import { Layout, Menu, Icon, Button, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Main.scss';
import Footers from '../Footer';

const cx = classNames.bind(styles);
const { Header, Sider, Content, Footer } = Layout;
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

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    const { children } = this.props;
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0
          }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className={cx('logo')}>
            <Link to="/">reactblog</Link>
          </div>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="desktop" />
              <span>Option 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
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
          <Header className={cx('header')}>
            <Icon
              className={cx('trigger')}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
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
          <Footer className={cx('footer')}>
            This is an example of implementation of Ant Design with ReactPWA.
            Help us grow further visit&nbsp;
            <a
              href="https://opencollective.com/react-pwa"
              target="_blank"
              rel="noreferrer nofollow noopener"
            >
              OpenCollective
            </a>
          </Footer>
*/
