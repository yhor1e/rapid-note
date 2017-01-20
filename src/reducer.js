// redux reducer

import debug from 'debug';
const d = debug('reducer');

const initialState = {
  raw: '',
  html: ''
};

const reducer = (state, action) => {

  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
  case 'INPUT_NOTE':
    d('INPUT_NOTE');
    return Object.assign({}, state, {
      raw: action.val,
      html: action.markedVal
    });

  case 'INITIALIZE':
    d('INITIALIZE');
    return Object.assign({}, state, {
      raw: action.val,
      html: action.markedVal
    });

  default:
    return state;
  }
};

export default reducer;
