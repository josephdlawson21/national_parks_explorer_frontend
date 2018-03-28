import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Reducer from './reducer'
import thunk from 'redux-thunk'

const store = createStore(
  Reducer,
  applyMiddleware(thunk)
)


ReactDOM.render(
  {require('dotenv').load()}
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
