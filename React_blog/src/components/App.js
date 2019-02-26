import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ListPage, PostPage, EditorPage, NotFoundPage } from '../pages';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={ListPage} />
            <Route path="/page/:page" component={ListPage} />
            <Route path="/tag/:tag/:page?" component={ListPage} />
            <Route path="/post/:id" component={PostPage} />
            <Route path="/editor" component={EditorPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
