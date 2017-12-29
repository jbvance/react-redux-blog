import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise'
// BrowserRouter interacts with the history and decides what
// to do based on a change on the URL
// Route provides configuration to say what component to render
// based on what the url looks like
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} /> 
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />         
        </Switch>    
      </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
