import './App.css';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './component/Home';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import About from './component/Pages/About';
import Services from './component/Pages/Services';
import News from './component/Pages/News';
function App() {
  return (
    <>
    <div class='App'>
        <Router>
          <Header/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/aboutus' component={About}/>
              <Route path='/services' component={Services}/>
              <Route path='/news' component={News}/>  
            </Switch>    
          <Footer/>
        
        </Router>
    </div>
      
    </>
  );
}

export default App;
