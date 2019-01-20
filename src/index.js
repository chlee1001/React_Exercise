import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import './index.scss';

// 리덕스 관련 불러오기
import { createStore } from 'redux';
import reducers from './reducers';

// 스토어 생성
const store = createStore(reducers);

render(<App />, document.getElementById('root'));
