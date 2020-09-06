import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo.js';
import Profile from './Profile.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Profile userId="testUser01"></Profile>
    <Todo title="리액트 공부 1" desc="고우고우"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
