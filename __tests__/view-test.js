import React from 'react';
import { shallow } from 'enzyme';
import RootView from '../src/view';
import ReactTestUtils from 'react-addons-test-utils';

function setUp () {
  const props = {
    onKeyUp: jest.fn(),
    inputedVal: 'bar'
  };

  const component = shallow(
    <RootView {...props}/>
  );

  return {
    props: props,
    component: component,
    inputed: component.find('#inputedVal'),
    outputed: component.find('#outputedVal')
  };
}

describe('root view', () => {
  it('output value', () => {
    const { outputed } = setUp();
    expect(outputed.prop('value')).toMatch('bar');
  });

  it('inputed area should call onKeyUp', () => {
    const { inputed, props } = setUp();
    console.log(ReactTestUtils.Simulate.keyUp(inputed));
    expect(props.onKeyUp).toBeCalled();
  });

});
