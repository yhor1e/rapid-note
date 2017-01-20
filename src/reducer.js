// redux reducer

import debug from 'debug';
const d = debug('reducer');

const initialState = {
  originVal: '',
  translatedVal: ''
};

const reducer = (state, action) => {

  if(typeof state === 'undefined') {
    return initialState;
  }

  if(action.type === 'INPUT_NOTE') {
    d('DO_TRANSLATE');

    return Object.assign({}, state, {
      originVal: action.val,
      translatedVal: action.markedVal
    });
  } else if(action.type === 'INITIALIZE') {
    d('INITIALIZE');

    return Object.assign({}, state, {
      originVal: action.val,
      translatedVal: action.markedVal
    });
  }

  return state;
};

export default reducer;
