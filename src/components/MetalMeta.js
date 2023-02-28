import React from 'react';
import './MetalMeta.css';

function MetalMeta(props) {
  const {bands, styles, fans} = props
  return (
    <div className="MetalMeta">
      <p>This page shows {bands} metal bands that cover {styles} radical styles! {(fans*1000).toLocaleString("en-US")} people worship these bands!</p>
    </div>
  )
}

export default MetalMeta;