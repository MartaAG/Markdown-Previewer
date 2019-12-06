import React from 'react';
import './Preview.css'

function Preview(props) {
  return (<div className="container3">
    <p>Preview</p>
    <div id="preview">
      <p>{props.displayed}</p>
    </div>
  </div>)
}

export default Preview
