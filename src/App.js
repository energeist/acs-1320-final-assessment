import './App.css';
import Header from './Header'
import MetalMeta from './MetalMeta'
import BandList from './BandList'
import data from './metal.json'

console.log(data)
const numBands = data.length
console.log(numBands)
const uniqueStyles = []
const styleMap = data.map((band) => {
  band.style.split(',').forEach((style) => {
    if (!uniqueStyles.includes(style)) {
      uniqueStyles.push(style)
    }
  })
  return band.style.split(',')
})

console.log(styleMap)

function App() {
  return (
    <div className="App">
      <Header />
      <MetalMeta bands={numBands} styles={uniqueStyles.length}/>
      <BandList />
    </div>
  );
}

export default App;
