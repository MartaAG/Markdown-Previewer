import React, {Component} from 'react';
import Editor from './Editor'
import Preview from './Preview'

class MarkdownEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
    editorText: '',
    test:"atasd"}
    this.changeText = this.changeText.bind(this)
  }

  changeText(text) {
    this.setState({editorText: text})
  }

  render = () => {
    return (
      <div className="container">
        <Editor inputText={this.state.editorText} onTextChange = {this.changeText}/>
        <Preview displayed={this.state.editorText}/>
      </div>
    )
  }
}

export default MarkdownEditor;
