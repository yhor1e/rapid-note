// redux reducer

import marked from 'marked';

const initialState = {
  originVal: '',
  translatedVal: ''
};

const reducer = (state, action) => {

  if (typeof state === 'undefined') {
    return initialState;
  }

  if(action.type === 'DO_TRANSLATE') {
    return Object.assign({}, state, {
      originVal: action.val,
      translatedVal: marked(action.val)
    });
  }
  return state;
};

export default reducer;
