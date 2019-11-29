import React from 'react';
import { shallow } from 'enzyme';
import Editor from './Editor'

describe('Editor', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Editor />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

});
