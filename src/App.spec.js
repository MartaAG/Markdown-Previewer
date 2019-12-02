import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import MarkdownEditor from './components/MarkdownEditor'

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the MarkdownEditor', () => {
    expect(wrapper.containsMatchingElement(<MarkdownEditor />)).toEqual(true);
  })

});
