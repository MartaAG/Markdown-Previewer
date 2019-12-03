import React from 'react';
import {shallow} from 'enzyme';
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
    expect(wrapper.containsMatchingElement(<Editor/>, <Preview/>)).toEqual(true)
  });

  it('should render string of the Editor component to the Preview Component', () => {
    let testingString = "Testing preview";
    wrapper.setState({editorText: testingString})
    expect(wrapper.find('Editor').prop('inputText')).toEqual(testingString)
    expect(wrapper.find('Preview').prop('displayed')).toEqual(testingString)
  });

  it('changing props of Editor changes editorText in MarkdownEditor and Preview', () => {
    wrapper.setState({editorText: 'Blah'})
    let testingString = "Testing";

    wrapper.find('Editor').props().onTextChange(testingString)

    expect(wrapper.find('Editor').prop('inputText')).toEqual(testingString)
    expect(wrapper.state('editorText')).toEqual(testingString)
    expect(wrapper.find('Preview').prop('displayed')).toEqual(testingString)
  });
});
