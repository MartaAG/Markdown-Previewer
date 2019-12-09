import React from 'react';
import './Preview.css'
import marked from 'marked'
import ReactHtmlParser from 'react-html-parser'

function Preview(props) {
  return (<div className="container3">
    <p>Preview</p>
    <div id="preview">
        {ReactHtmlParser(marked(props.displayed, {breaks:true}))}
    </div>
  </div>)
}

export default Preview
