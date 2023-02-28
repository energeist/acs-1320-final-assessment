import { React, useState } from 'react';
import BandCard from './BandCard';
import './BandList.css';
import data from './metal.json';

function BandList() {
  const [ query, setQuery ] = useState('');
  const bands = data.filter((obj) => {
    const inName = obj.band_name.toLowerCase().includes(query.toLowerCase())
    return inName }).map((
    { ID, band_name, fans, formed, origin, split, style }) => {
      return (
        <BandCard
          id={ ID }
          key={ ID }
          bandName={ band_name }
          fans={ fans }
          formed={ formed }
          origin={ origin }
          split={ split }
          style={ style }
        />
      )
    }
  )

  return (
    <div className="BandSearch">
      <form>
        <input
          value={query}
          placeholder="search bands"
          onChange={(evt) => setQuery(evt.target.value)}
        />
      </form>
      <div className="BandList">
        { bands.length > 0 ? bands : "No results match your search" } 
      </div>
    </div>
  )
}

export default BandList;