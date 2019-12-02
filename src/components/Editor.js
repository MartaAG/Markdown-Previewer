import React, {Component} from 'react';

class Editor extends Component {
  constructor(props) {
  super(props)

}

  render = () => {
    return(
<div>
  <p>Editor view</p>
  <textarea id="editor"
  type="text"
  value={this.props.editorText}
  ></textarea>
</div>
  )
}
}

export default Editor
