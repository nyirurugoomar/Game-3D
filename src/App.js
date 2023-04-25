import './App.css';
import CurrentGame from './component/CurrentGame';
import Footer from './component/Footer';
import Header from './component/Header';
import Hero from './component/Hero';
import NewsLetter from './component/NewsLetter';
import Projects from './component/Projects';
import Tools from './component/Tools';
import VideoCapture from './component/VideoCapture';


function App() {
  return (
    <>
    <div class='App'>
      <Header/>
      <Hero/>
      <CurrentGame/>
      <VideoCapture/>
      <Tools/>
      <Projects/>
      <NewsLetter/>
      <Footer/>
    
    </div>
      
    </>
  );
}

export default App;
