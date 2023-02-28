import React from 'react';
import './MetalMeta.css';

function MetalMeta(props) {
  const {bands, styles} = props
  return (
    <div className="MetalMeta">
      <p>Number of Bands: {bands}</p>
      <p>Number of Styles: {styles}</p>
    </div>
  )
}

export default MetalMeta;