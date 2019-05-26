import React from 'react';
import ReactDOM from 'react-dom';
import WordRelay from './WordRelay';
import WordRelayHooks from './WordRelayHooks';
import * as serviceWorker from './serviceWorker';
import {hot} from 'react-hot-loader/root';

const Hot = hot(WordRelayHooks);

ReactDOM.render(<Hot/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
