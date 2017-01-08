import actionCreater from '../src/action-creater';

describe('action-creater', () => {
  it('should create an action to add a text', () => {
    const val = 'Finish docs';
    const expectedAction = {
      type: 'DO_TRANSLATE',
      index: 1,
      val
    };
    expect(actionCreater(val)).toEqual(expectedAction);
  });
});
