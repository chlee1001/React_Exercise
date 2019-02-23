import React, { Component } from 'react';
import Search from './Search.js';
import './Search.css';

class App extends Component {
  render() {
    return (
      <div>
        <Search default="bbc-news" />
      </div>
    );
  }
}

export default App;
