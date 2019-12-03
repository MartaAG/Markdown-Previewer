import React, {Component} from 'react';

class Editor extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onTextChange(e.target.value)
  }

  render = () => {
    return (<div>
      <p>Editor view</p>
      <textarea id="editor" type="text" value={this.props.inputText} onChange={this.handleChange}/>
    </div>)
  }
}

export default Editor
