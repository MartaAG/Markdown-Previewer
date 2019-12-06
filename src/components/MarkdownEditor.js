import React, {Component} from 'react';
import Editor from './Editor'
import Preview from './Preview'
import './MarkdownEditor.css'

const placeholder =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

`


class MarkdownEditor extends Component {
  constructor(props) {
    super(props)
    this.state = {
    editorText: placeholder
    }
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
