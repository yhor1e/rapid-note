import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { initialize, inputNote } from './action-creater';
import reducer from './reducer';
import RootView from './root-view';

const store = createStore(reducer);

store.dispatch(initialize());

const render = () => {
  return ReactDOM.render(
    <RootView
       plain={ store.getState().plain }
       html={{__html: store.getState().html }}
       onKeyUp={ e => store.dispatch(inputNote(e.target.value)) }/>,
    document.getElementById('root')
  );
};

render();
store.subscribe(render);
