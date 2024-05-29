import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../../../redux/reducers';
import ToDoList from './ToDoList';

const store = createStore(reducer);

const ToDoListData = () => {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
};

export default ToDoListData;
