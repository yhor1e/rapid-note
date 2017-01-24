// redux reducer

import debug from 'debug';
const d = debug('reducer');

const initialState = {
  plain: '',
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
      plain: action.plain,
      html: action.html
    });

  case 'INITIALIZE':
    d('INITIALIZE');
    return Object.assign({}, state, {
      plain: action.plain,
      html: action.html
    });

  default:
    return state;
  }
};

export default reducer;
