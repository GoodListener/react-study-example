import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './Profile.js';
import * as serviceWorker from './serviceWorker';
import Todos from './component/Todos';

ReactDOM.render(
  <React.StrictMode>
    <Profile userId="test" userName="userName"></Profile>
    <Todos></Todos>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
