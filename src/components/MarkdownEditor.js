import React, {Component} from 'react';
import Editor from './Editor'
import Preview from './Preview'

class MarkdownEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {editorText: '',
    test:"atasd"}
  }

  render = () => {
    return (
      <div className="container">
        <Editor editorText={this.state.editorText}/>
        <Preview />
      </div>
    )
  }
}

export default MarkdownEditor;
