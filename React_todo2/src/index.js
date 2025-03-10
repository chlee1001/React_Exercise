import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import App from './containers/App';
import './index.css';
import modules from './modules';

// 리덕스 관련 불러오기
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux'; // Provider는 react-redux 라이브러리에 내장된 리액트 애플리케이션에 손쉽게 스토어를 연동할 수 있도록 도와주는 컴포넌트

// 스토어 생성
const store = createStore(
  modules,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
