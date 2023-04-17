import './App.css';
import CurrentGame from './component/CurrentGame';
import Header from './component/Header';
import Hero from './component/Hero';
import VideoCapture from './component/VideoCapture';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <CurrentGame/>
      <VideoCapture/>
    </>
  );
}

export default App;
