import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import actionCreater from './action-creater';
import reducer from './reducer';
import RootView from './root-view';

const persistedState = {
  originVal: window.localStorage.getItem('originVal')
};

const store = createStore(reducer, persistedState);

const applyVal = (e) => {
  let val = e.target.value;
  return store.dispatch(actionCreater(val));
};

const render = () => {
  return ReactDOM.render(
    <RootView originVal={ store.getState().originVal } translatedVal={{__html: store.getState().translatedVal }} onKeyUp={ applyVal }/>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);

const setData = () => {
  window.localStorage.setItem('originVal', store.getState().originVal);
};

store.subscribe(setData);
