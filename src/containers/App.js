import React, { Component } from 'react';
import CounterContainer from './CounterContainer';
import Button from '../components/Button';

class App extends Component {
  render() {
    return (
      <div>
        <Button />
        <CounterContainer />
      </div>
    );
  }
}

export default App;
