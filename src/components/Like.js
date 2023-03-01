import React, { useState } from 'react';
import './Like.css';

function Like(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="Like">
      <button 
        onClick={() => { 
          if (count > 0) {
            setCount(count - 1)
          } else {
            setCount(0)
          }
        }}
      >👎</button>
      <h1>{count}</h1>
      <button 
        onClick={() => {
            setCount(count + 1)
        }}
      >🤘</button>
    </div>
  );
}

export default Like;