import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage';
import Todo from './components/common/Todo';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/todos" component={Todo} />
  </Route>
);
