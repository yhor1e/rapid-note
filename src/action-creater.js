// redux action creater
import api from './api.js';
import marked from 'marked';
import debug from 'debug';
const  d = debug('action-creater');


export const initialize = () => {

  d('initialize');

  const note = api.fetchNote();

  return ({
    type: 'INITIALIZE',
    index: 1,
    plain: note,
    html: marked(note)
  });
};

export const inputNote = (note) => {

  d('inputNote');

  api.saveNote(note);

  return ({
    type: 'INPUT_NOTE',
    index: 2,
    plain: note,
    html: marked(note)
  });
};
