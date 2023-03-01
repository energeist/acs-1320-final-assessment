import './App.css';
import Header from './Header';
import MetalMeta from './MetalMeta';
import BandList from './BandList';
import data from '../metal.json';

const numBands = data.length;
const uniqueStyles = [];
let totalFans = 0;
const styleMap = data.map((band) => {
  band.style.split(',').forEach((style) => {
    if (!uniqueStyles.includes(style)) {
      uniqueStyles.push(style);
    }
  totalFans += parseInt(band.fans);
  })
  return band.style.split(',');
});

function App() {
  return (
    <div className="App">
      <Header />
      <MetalMeta bands={numBands} styles={uniqueStyles.length} fans={totalFans}/>
      <BandList />
    </div>
  );
}

export default App;
