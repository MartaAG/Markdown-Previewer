import React from 'react';
import { shallow } from 'enzyme';
import Preview from './Preview';
import Editor from './Editor';
import MarkdownEditor from './MarkdownEditor'

describe('MarkdownEditor', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<MarkdownEditor/>));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render components', () => {
    expect(wrapper.containsMatchingElement(
      <Editor />,
      <Preview />
    )).toEqual(true)
  });

  it ('should render string of the Editor component to the Preview Component', () => {
    let testingString = "Testing preview";
    wrapper.setState({editorText: testingString})
    expect(wrapper.find('Editor').prop('editorText')).toEqual(testingString)
    expect(wrapper.find('Preview').prop('editorText')).toEqual(testingString)
  });
});
