import './App.css';
import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import Body from './components/Body';
import imageData from './components/imageData';

function App() {
  return (
    <div>
      <Header/> 
      <div id='Body'>.
        {imageData.map((image) => (
          <Body id={image.id} img={image.img} />
        ))}
      </div>
      <GallaryFooter/> 
    </div>
  )
}

export default App;