import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview'

describe('Editor', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<Preview displayed='Enter text'/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('should render displayed message in markup editor as HTML', () => {
    //  wrapper.setProps({displayed : 'Enter text'})
    let rendered_text = "<div id=\"preview\"><p>Enter text</p></div>"
    expect(wrapper.find("#preview").html()).toEqual(rendered_text)
  })

  it('no problem with empty string in editor', () => {
    wrapper.setProps({displayed : ''})
    let rendered_text = "<div id=\"preview\"></div>"
    expect(wrapper.find("#preview").html()).toEqual(rendered_text)
  })

});
