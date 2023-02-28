import React from 'react';
import './MetalMeta.css';

function MetalMeta(props) {
  const {bands, styles} = props
  return (
    <div className="MetalMeta">
      <p>This page shows {bands} metal bands that cover {styles} radical styles!</p>
    </div>
  )
}

export default MetalMeta;