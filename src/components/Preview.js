import React from 'react';

function Preview(props) {
  return (
  <div id="preview">
  <p>Preview view</p>
  <p>{props.displayed}</p>
  </div>
  )
}

export default Preview
