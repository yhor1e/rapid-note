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
    return window.localStorage.getItem(KEY);
  }
};
