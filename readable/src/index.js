import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Post from './components/Post'
import CreatePost from './components/CreatePost'
import store from './store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Switch>
        <Route path="/create" component={CreatePost} />
        <Route path="/:category/:post_id" component={Post} />
        <Route key="category" path="/:category" component={App} />
        <Route key="no-category" path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
