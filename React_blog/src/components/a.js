import _ from 'lodash';
import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route } from 'react-router-dom';
import { ListPage, PostPage, EditorPage, NotFoundPage } from '../pages';

const NavBarMobile = ({
  children,
  leftItems,
  onPusherClick,
  onToggle,
  rightItems,
  visible
}) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      items={leftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: '100vh' }}
    >
      <Menu fixed="top" inverted>
        <Menu.Item>
          <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          {_.map(rightItems, item => (
            <Menu.Item {...item} />
          ))}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems }) => (
  <Menu fixed="top" inverted>
    <Menu.Item>
      <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
    </Menu.Item>
    {_.map(leftItems, item => (
      <Menu.Item {...item} />
    ))}
    <Menu.Menu position="right">
      {_.map(rightItems, item => (
        <Menu.Item {...item} />
      ))}
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: '5em' }}>{children}</Container>
);

class NavBar extends Component {
  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children, leftItems, rightItems } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
      </div>
    );
  }
}

const leftItems = [
  { as: 'a', content: 'Home', key: 'home' },
  { as: 'a', content: 'Users', key: 'users' }
];
const rightItems = [
  { as: 'a', content: 'Login', key: 'login' },
  { as: 'a', content: 'Register', key: 'register' }
];

export default class App extends Component {
  render() {
    return (
      <NavBar leftItems={leftItems} rightItems={rightItems}>
        <Switch>
          <Route exact path="/" component={ListPage} />
          <Route path="/page/:page" component={ListPage} />
          <Route path="/tag/:tag/:page?" component={ListPage} />
          <Route path="/post/:id" component={PostPage} />
          <Route path="/editor" component={EditorPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </NavBar>
    );
  }
}
