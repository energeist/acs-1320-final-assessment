import React from 'react';
import './BandCard.css';
import Like from './Like'

function BandCard(props) {
  const {id, bandName, fans, formed, origin, split, style} = props
  return (
    <div className='BandCard' key={id}>
      <div>
        <h1>{bandName}</h1>
        <p><span>Formed: {formed}</span> | <span>Split : {split}</span></p>
        <p>{origin}</p>
        <p>Fans: {(fans*1000).toLocaleString("en-US")}</p>
        <div className='StyleList'>
          <ul>{style.split(',').map((item) => {
            return <li key={item}>{item}</li>
          })}</ul>
        </div>
        <div>
        { split === '-' ? <Like /> : '' }
        </div>
      </div>
    </div>
  )
}

export default BandCard;