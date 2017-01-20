import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { initialize, inputNote } from './action-creater';
import reducer from './reducer';
import RootView from './root-view';

const store = createStore(reducer);

store.dispatch(initialize());

const applyVal = (e) => {
  let val = e.target.value;
  return store.dispatch(inputNote(val));
};

const render = () => {
  return ReactDOM.render(
    <RootView originVal={ store.getState().originVal } translatedVal={{__html: store.getState().translatedVal }} onKeyUp={ applyVal }/>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
