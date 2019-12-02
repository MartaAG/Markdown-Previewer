import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview'

describe('Editor', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Preview />));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

});
