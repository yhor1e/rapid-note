// redux api util
import debug from 'debug';
const d = debug('api');

const KEY = 'note';

export default {
  saveNote: (note) => {
    d('saveNote');
    window.localStorage.setItem(KEY, note);
    return;
  },
  fetchNote: () => {
    d('fetchNote');

    let note = window.localStorage.getItem(KEY);

    // handle previous version
    if(note == null){
      note = window.localStorage.getItem('originVal') || '';
    }

    return note;
  }
};
