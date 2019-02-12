import React, { Component } from 'react';
import {
  Button,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Content
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListPage, PostPage, EditorPage, NotFoundPage } from '../pages';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;
    const { handleShowClick } = this;

    return (
      <Router>
        <Sidebar.Pushable as={Segment} attached="bottom">
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <div>
              <div>
                <Menu fixed="top" inverted>
                  <Menu.Item
                    onClick={() =>
                      this.setState({ visible: !this.state.visible })
                    }
                  >
                    <Icon name="sidebar" />
                    Menu
                  </Menu.Item>
                </Menu>
              </div>
              <div>
                <Switch>
                  <Route exact path="/" component={ListPage} />
                  <Route path="/page/:page" component={ListPage} />
                  <Route path="/tag/:tag/:page?" component={ListPage} />
                  <Route path="/post/:id" component={PostPage} />
                  <Route path="/editor" component={EditorPage} />
                  <Route component={NotFoundPage} />
                </Switch>
              </div>
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    );
  }
}

// <Button.Group>
//   <Button disabled={visible} onClick={this.handleShowClick}>
//     Show sidebar
//                 </Button>
//   <Button disabled={!visible} onClick={this.handleHideClick}>
//     Hide sidebar
//                 </Button>
// </Button.Group>
