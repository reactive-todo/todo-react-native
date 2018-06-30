import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './reducer';
import TaskList from './TaskList';

const client = axios.create({
  baseURL: 'http://192.168.1.162:8080',
  responseType: 'json',
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default () => (
  <Provider store={store}>
    <TaskList />
  </Provider>
);
