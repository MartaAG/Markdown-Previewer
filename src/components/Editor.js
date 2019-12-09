import React, {Component} from 'react';
import './Editor.css'
import dompurify from 'dompurify'


class Editor extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    let sanitazed = dompurify.sanitize(e.target.value);
    this.props.onTextChange(sanitazed)
  }

  render = () => {
    return (<div className="container2">
      <p>Editor view</p>
      <textarea id="editor" type="text" value={this.props.inputText} onChange={this.handleChange}/>
    </div>)
  }
}

export default Editor
